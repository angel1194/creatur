import React from 'react';
import {Container} from 'semantic-ui-react';
import {Header, Img, Line, Icon} from './style';
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels';
import MainHotels from '../MainHotels';
import Trailcrumb from '../Trailcrumb';
import {setRooms,setHotels, setTransport, setTicket} from '../../../containers/Events/Firebase/firebase'
import moment from 'moment';
import Rooms from '../Rooms';
import FontAwesome from 'react-fontawesome';
import ShoppingCart from '../ShoppingCart';
// import Header from '../Header';
import firebase from '../../../containers/Events/Firebase';

let rootRef = firebase.database().ref()

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
      aryTicket:{searchTicket:{}},
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

   let idSales = rootRef.child('idSales')
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

    let refTicket = rootRef.child('tickets')
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
        // Ordenando las habitaciones por precios
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

         // Ordenando los hoteles por los precios de las habitaciones
         let order = Object.keys(hotels).sort((a,b)=>{
           return parseInt(hotels[a].rooms[0].price) - parseInt(hotels[b].rooms[0].price)
         })

         let orderHotels=[]

         order.map(hotelKey=>{
           orderHotels.push({[hotelKey]:hotels[hotelKey]})
         })

         this.setState({
           available:orderHotels,
           totalNight:totalNight
         })

         this.setState({
           checkin:startDate.format('MM-DD-YYYY'),
           checkout:endDate.format('MM-DD-YYYY'),
           roomsUI:rooms
         })


        this.location(<MainHotels  addRooms={this.addRooms} addComparation={this.addComparation} hotels={orderHotels} location={this.location}/>, 2)
    }
    else{
      alert('No hay habitaciones disponibles');
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

  addRooms(rooms,hotels){
    this.location(<ShoppingCart idSales={this.state.idSales} priceAndSections={this.priceAndSections} searchTicket={this.searchTicket} ticketOptions={this.state.ticketOptions} car={this.state.car} carState={this.state}/>, 4)
    const state = this.state.car
    state['room'] = rooms
    state['hotel'] = hotels
    state['checkin'] = this.state.checkin
    state['checkout'] = this.state.checkout
    state['idSales'] = 'CMV-test'+this.state.idSales

    this.setState(state)
    this.totalAmount(rooms)
  }

  totalAmount(rooms){
    let count = this.state.totalNight
    const {car} = this.state
    let price = Number(rooms.price)
    let taken = Number(rooms.taken)
    let total = (price * count) * taken
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
    if (Object.keys(carObject).length >= 1) {
      let used = transport[Object.keys(carObject)[0]].used
      let seating = transport[Object.keys(carObject)[0]].seating
      if (data > seating - used) {
        alert('Cantidad de asientos no disponibles');
      }else {
        this.location(<ShoppingCart idSales={this.state.idSales} price={transport[transports[0]].price} carObject={carObject} seating={data} ubicacion={ubicacion}  priceAndSections={this.priceAndSections} searchTicket={this.searchTicket} ticketOptions={this.state.ticketOptions} car={this.state.car} carState={this.state}/>, 5)
        car['transport'] = carObject
        // Agregando price al state car
        let totalCar = data * Number(transport[Object.keys(carObject)[0]].price)
        car['total'] = totalCar
        car['idSales'] = this.state.idSales
        this.setState(car)
      }
    } else {
      alert('No hay asientos disponibles');
    }
  }

  searchTicket(section,quantity){
    let aryTicket = {}
    let ticketRef = rootRef.child('tickets')
    Object.keys(this.state.tickets).map((ticket)=>{
      if (Object.keys(aryTicket).length < quantity) {
        if (section === this.state.tickets[ticket].section) {
          aryTicket[ticket]=this.state.tickets[ticket]
        }
      }
    })
    if (Object.keys(aryTicket).length < quantity) {
      alert('No se encontraron resultados.')
      aryTicket = {}
      this.setState({
        searchTicket:aryTicket
      })
      return aryTicket
    }else {
      Object.keys(aryTicket).map((ticket)=>{
        let ticketTemp = this.state.tickets[ticket]
        ticketTemp['time'] = moment().format()
        rootRef.child('temporal').child(ticket).set(ticketTemp)
        ticketRef.child(ticket).remove()
      })
      this.setState({
        searchTicket:aryTicket
      })
      return aryTicket
    }
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

  render() {
    return (
      <div>
        <Container>
          {/* <Header location={this.location}/> */}
          <Header>
            <Img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png"/>
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
            <Icon>
              <FontAwesome name="bars" onClick={()=>alert('clic')}/>
            </Icon>
          </Header>
        </Container>
        <Line/>
        {this.state.container}
      </div>
    );
  }
}

export default Home;
