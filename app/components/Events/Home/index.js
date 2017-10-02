import React from 'react';
import {Container} from 'semantic-ui-react'
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import MainHotels from '../MainHotels'
import Trailcrumb from '../Trailcrumb'
import {setRooms,setHotels, setTransport, setTicket} from '../../../containers/Events/Firebase/firebase'
import moment from 'moment';
import Rooms from '../Rooms';
import ShoppingCart from '../ShoppingCart';
import Header from '../Header';
import firebase from '../../../containers/Events/Firebase'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents addTransport={(ticket)=>this.addTransport(ticket)} changesLocation={(e)=>this.changesLocation(e)} setHotels={this.setHotels.bind(this)} location={()=>this.location(<MainHotels addRooms={this.addRooms} addComparation={this.addComparation} location={this.location}/>, 2)}/>,
      location: 1,
      available:{},
      car:{
        total:0
      },
      comparation:{

      },
      ubicacion:'hotel',
      aryTicket:{searchTicket:{}}
    }
    this.location = this.location.bind(this)
    this.setHotels = this.setHotels.bind(this)
    this.addRooms = this.addRooms.bind(this)
    this.addComparation = this.addComparation.bind(this)
    this.addTransport = this.addTransport.bind(this)
    this.searchTicket = this.searchTicket.bind(this)
    this.priceAndSections = this.priceAndSections.bind(this)
  }

  componentWillMount(){
    //seteando las Noches en el state con la funcion de Firebase(Metodo once, devuelve promesa)
    setRooms().then(
      res => this.setState({
        rooms: res.val()
      })
    )

    //seteando los hoteles en el state con la funcion de Firebase(Metodo once, devuelve promesa)
   setHotels().then(
     res=>this.setState({
       hotels:res.val()
     })
   )

   let idSales = firebase.database().ref().child('idSales')
   idSales.on('value', snap => {
     this.setState({
       idSales:snap.val()
     })
   })
  }

  componentDidMount(){

    setTransport().then(
      res=>this.setState({
        transport:res.val()
      })
    )

    let refTicket = firebase.database().ref().child('tickets')
    refTicket.on('value', snap => {
      this.setState({
        tickets:snap.val()
      })
      this.priceAndSections()
    })
  }

  changesLocation(ubicacion){
    this.setState({
      ubicacion:ubicacion,
    })

  }

  location(container, location){
    this.setState({
      container,
      location,
    })
  }

  setHotels(startDate,endDate,rooms){
    let totalNight = endDate.format('DD')-startDate.format('DD')
    let nights = Object.keys(this.state.rooms).map(night => moment.unix(parseInt(night)))
    let nightsBetween = nights.filter((night)=>this.filterNight(night,startDate))
    if (nightsBetween.length > 0) {
        nightsBetween = nightsBetween[0]['_i']/1000

        let aryRoom=[]
        Object.keys(rooms).map( key => {
          var count=0;
          Object.keys(rooms[key]).map(item=>{
            // si el key es child contar la cantidad de ninos y sumar
            if(item == 'child'){
              count += Object.keys(rooms[key][item]).length
            }
            else{
              // si no es child sumar
              count += parseInt(rooms[key][item])
            }
          })
          aryRoom.push(count)
        })

        let availableRooms=[]
        if (aryRoom.length > 1) {
          let firstFilter = Object.keys(this.state.rooms[nightsBetween]).filter(keyRoom=>{
            let remaining = this.state.rooms[nightsBetween][keyRoom].available-this.state.rooms[nightsBetween][keyRoom].used
            if (remaining >= aryRoom.length) {
              return this.state.rooms[nightsBetween][keyRoom]
            }
          })

          firstFilter.map(keyRoom=>{
            let status=[]
            for (var i = 0; i < aryRoom.length; i++) {
                if (this.state.rooms[nightsBetween][keyRoom].occupancy >= aryRoom[i]) {
                  status.push(true)
                }
                else{
                  status.push(false)
                }
            }
            let isAvail =status.every((value)=>{
              return value === true
            })
            if (isAvail === true) {
              let roomAdded = this.state.rooms[nightsBetween][keyRoom]
              roomAdded['night']= nightsBetween
              roomAdded['keyRoom']=keyRoom
              roomAdded['taken']= aryRoom.length
              availableRooms.push(roomAdded)
            }
          })
        }
        else {
          Object.keys(this.state.rooms[nightsBetween]).map((keyRoom)=>{
            if ((this.state.rooms[nightsBetween][keyRoom].available-this.state.rooms[nightsBetween][keyRoom].used) > 0) {
              if (Number(this.state.rooms[nightsBetween][keyRoom].occupancy) >= aryRoom[0]) {
                let roomAdded= this.state.rooms[nightsBetween][keyRoom]
                roomAdded['night']= nightsBetween
                roomAdded['keyRoom']=keyRoom
                roomAdded['taken']=1
                availableRooms.push(roomAdded)
              }
            }
          })
        }
        availableRooms.sort((a,b)=>{
          return parseInt(a.price) - parseInt(b.price)
        })

         //Buscando el hotel al que pertenecen las habitaciones
         let hotels= {}

         availableRooms.map(available=>{
           let hotel = available.idHotel
           if(!(hotel in hotels)){
             let stateHotel = this.state.hotels[hotel]
             hotels[hotel]=stateHotel
             hotels[hotel]['rooms']=[]
             hotels[hotel]['rooms'].push(available)
           }
           else{
             hotels[hotel]['rooms'].push(available)
           }
         })

         this.setState({
           available:hotels,
           totalNight:totalNight
         })

         this.setState({
           checkin:startDate.format('DD-MM-YYYY'),
           checkout:endDate.format('DD-MM-YYYY')
         })
        this.location(<MainHotels  addRooms={this.addRooms} addComparation={this.addComparation} hotels={hotels} location={this.location}/>, 2)
    }
    else{
      alert('no hay habitaciones disponibles');
    }
  }



  filterNight(night,startDate,endDate){
    let nightFormat= moment(night).format('DD/MM/YYYY')
    if (moment(nightFormat).isSame(moment(startDate).format('DD/MM/YYYY'))) {
      return night
    }
    // if (moment(night).isBetween(moment(startDate),moment(endDate).add(23,'hours').add(59,'minutes').add(59,'seconds'),null,'[]')) {
    //   return night
    // }
  }

  addRooms(rooms){
    this.location(<ShoppingCart idSales={this.state.idSales} priceAndSections={this.priceAndSections} searchTicket={this.searchTicket} ticketOptions={this.state.ticketOptions} car={this.state.car} carState={this.state}/>, 4)
    const state = this.state.car
    state['room'] = rooms

    this.setState(state)
    this.totalAmount(rooms)
  }

  totalAmount(rooms){
    let count = parseInt(this.state.checkout) - parseInt(this.state.checkin)
    const {car} = this.state
    let price = Number(rooms.price)
    let total = price * count
    car['total'] = total

    this.setState(car)
  }

  addComparation(item){
    this.location(<Rooms stateAll={this.state} addRooms={this.addRooms} comparation={this.state.comparation}/>, 3)
    const {comparation} = this.state
    comparation['hotel'] = item
    this.setState({comparation})
  }

  addTransport(data){
    const {transport, car, ubicacion, idSales} = this.state
    let carObject={}
    let transports=Object.keys(transport)
    let remaining;
    let taken =0;
    for (var i = 0; i < transports.length; i++) {
      if ((transport[transports[i]].seating - transport[transports[i]].used) > 0) {
        let avail = parseInt(transport[transports[i]].used) + parseInt(data)
        if (avail <= transport[transports[i]].seating) {
          remaining = parseInt(data) - parseInt(taken)
          carObject[transports[i]]=transport[transports[i]]
          carObject[transports[i]]['taken']=remaining
          break;
        }
        else {
          taken = parseInt(transport[transports[i]].seating) - parseInt(transport[transports[i]].used)
          carObject[transports[i]]=transport[transports[i]]
          carObject[transports[i]]['taken']=taken
        }
      }
    }
    this.location(<ShoppingCart idSales={this.state.idSales} price={transport[transports[0]].price} carObject={carObject} seating={data} ubicacion={ubicacion}  priceAndSections={this.priceAndSections} searchTicket={this.searchTicket} ticketOptions={this.state.ticketOptions} car={this.state.car} carState={this.state}/>, 5)
    car['transport'] = carObject
    // Agregando price al state car
    let totalCar = data * transport[transports[0]].price
    car['total'] = totalCar
    this.setState(car)
  }

  searchTicket(section,quantity){
    let aryTicket = {}
    let ticketRef = firebase.database().ref().child('tickets')
    Object.keys(this.state.tickets).map((ticket,i)=>{
      if (Object.keys(aryTicket).length < quantity) {
        if (section == this.state.tickets[ticket].section) {
          firebase.database().ref().child('temp').child(ticket).set(this.state.tickets[ticket])
          aryTicket[ticket]=this.state.tickets[ticket]
           ticketRef.child(ticket).remove()
        }
      }
    })
    // obtenirndo los tickets de la busqueda y metiendolo en un state
    this.state.aryTicket['searchTicket']=aryTicket
    this.setState(aryTicket)
    return aryTicket

  }

  priceAndSections(){
    let tickets =  this.state.tickets
    let options = {}
    Object.keys(tickets).map((ticket)=>{
      if (!(tickets[ticket].section in options)) {
        options[tickets[ticket].section] = {
          price:tickets[ticket].price
        }
      }
    })
    this.setState({
      ticketOptions:options
    })
  }

  // function goBack() {
  //   window.history.back();
  // }

  render() {
    return (
      <div>
        <Container>
          <Header location={this.location}/>
          <Trailcrumb
            hotels={this.state.available}
            location={this.location}
            nameContainer={this.state.location}
            setHotels={this.setHotels}
            addRooms={this.addRooms}
            removeRooms={this.removeRooms}
            addComparation={this.addComparation}
            comparation={this.state.comparation}
            stateAll={this.state.checkin}
            stateRoom={this.state}
            changesLocation={(e)=>this.changesLocation(e)}
            addTransport={this.addTransport}
          />
        </Container>
        {this.state.container}
      </div>
    );
  }
}

export default Home;
