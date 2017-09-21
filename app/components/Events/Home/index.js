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
// import styled from 'styled-components';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents addTransport={()=>this.addTransport()} changesLocation={(e)=>this.changesLocation(e)} setHotels={this.setHotels.bind(this)} location={()=>this.location(<MainHotels addRooms={this.addRooms} addComparation={this.addComparation} location={this.location}/>, 2)}/>,
      location: 1,
      available:{},
      car:{
        items:{

        },
        total:0,
        id:1
      },
      comparation:{

      },
      ubicacion:'hotel',
    }
    this.location = this.location.bind(this)
    this.setHotels = this.setHotels.bind(this)
    this.addRooms = this.addRooms.bind(this)
    this.addComparation = this.addComparation.bind(this)
    this.addTransport = this.addTransport.bind(this)
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
    this.priceAndSections()
    let totalNight = endDate.format('DD')-startDate.format('DD')
   // Convirtiendo las noches en objetos moment()
   let nights = Object.keys(this.state.rooms).map(night => moment.unix(parseInt(night)))
   // Buscando las fechas en el rango marcado
   let roomsBetween = nights.filter((night)=> this.filterNight(night,startDate,endDate))
   //Obteniendo la cantidad de personas por habitacion
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

   //Buscando la habitacion con las capacidades a buscar
   let availableRoom = []
   roomsBetween.map(date => {
     let newDate = date['_i']/1000
     //mapeando la cantidad de habitacion y la capacidad necesaria
     aryRoom.map(total=>{
       Object.keys(this.state.rooms[newDate]).map(room =>{
         let getRooms= this.state.rooms[newDate][room]
         if(getRooms.occupancy >= total){
           availableRoom.push(getRooms)
         }
       })
     })
   })

   //Buscando el hotel al que pertenecen las habitaciones
   let hotels= {}
   availableRoom.map(available=>{
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

    this.location(<MainHotels addRooms={this.addRooms} addComparation={this.addComparation} hotels={hotels} location={this.location}/>, 2)
  }

  filterNight(night,startDate,endDate){
    if (moment(night).isBetween(moment(startDate),moment(endDate).add(23,'hours').add(59,'minutes').add(59,'seconds'),null,'[]')) {
      return night
    }
  }

  addRooms(rooms){
    this.location(<ShoppingCart ticketOptions={this.state.ticketOptions} car={this.state.car} carState={this.state}/>, 4)
    const state = this.state.car
    state.items['room'] = rooms

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
    comparation[item] = item

    this.setState({comparation})
  }

  addTransport(){
    const state = this.state.transport
    console.log('State transport',state);
  }

  searchTicket(section,quantity){
    let aryTicket = {}
    let ticketRef = firebase.database().ref().child('tickets')
    for (var i = 1; i <= quantity; i++) {
      Object.keys(this.state.tickets).map( ticket => {
        if (section === this.state.tickets[ticket].section) {
          firebase.database().ref().child('temp').child(ticket).set(this.state.tickets[ticket])
          aryTicket[ticket]=this.state.tickets[ticket]
          ticketRef.child(ticket).remove()
        }
      })
    }
    return aryTicket
  }

  priceAndSections(){
    let tickets =  this.state.tickets
    let options = {}
    Object.keys(tickets).map((ticket)=>{
      if (!(tickets[ticket].section in options)) {
        options[tickets[ticket].section]={
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
          <Header/>
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
        <button onClick={()=>this.searchTicket('VIP',2)}>Buscar ticket</button>
        <button>Deshacer ticket</button>
        {this.state.container}
      </div>
    );
  }
}

export default Home;
