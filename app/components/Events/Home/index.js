import React from 'react';
import {Container} from 'semantic-ui-react'
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import MainHotels from '../MainHotels'
import Trailcrumb from '../Trailcrumb'
import {setRooms,setHotels} from '../../../containers/Events/Firebase/firebase'
import moment from 'moment';
import Rooms from '../Rooms';
// import styled from 'styled-components';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents setHotels={this.setHotels.bind(this)} location={()=>this.location(<MainHotels addRooms={this.addRooms} addComparation={this.addComparation} location={this.location}/>, 2)}/>,
      location: 1,
      available:{},
      car:{
        items:{

        },
        total:0,
        id:1
      },
      comparation:{

      }
    }
    this.location = this.location.bind(this)
    this.setHotels = this.setHotels.bind(this)
    this.addRooms = this.addRooms.bind(this)
    this.removeRooms = this.removeRooms.bind(this)
    this.addComparation = this.addComparation.bind(this)
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


  location(container, location){
    this.setState({
      container,
      location,
    })
  }

  setHotels(startDate,endDate,rooms){

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
   // let aryRooms= []
   availableRoom.map(available=>{
     let hotel = available.idHotel
     if(!(hotel in hotels)){
       // console.log(available.idHotel);
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
   })

    this.location(<MainHotels addRooms={this.addRooms} addComparation={this.addComparation} hotels={hotels} location={this.location}/>, 2)
  }

  filterNight(night,startDate,endDate){
    if (moment(night).isBetween(moment(startDate),moment(endDate).add(23,'hours').add(59,'minutes').add(59,'seconds'),null,'[]')) {
      return night
    }
  }

  addRooms(rooms){
    const state = this.state.car
    if (!(rooms.idHotel in state.items)) {
      state.items[rooms.idHotel] = rooms

      this.setState(state)
      this.totalAmount(rooms)
    }
  }

  totalAmount(rooms){
    const {car} = this.state
    let price = Number(rooms.price)
    let total = price + car['total']
    car['total'] = total

    this.setState(car)
  }

  addComparation(item){
    this.location(<Rooms comparation={this.state.comparation}/>, 3)
    const {comparation} = this.state
    comparation[item] = item

    this.setState({comparation})
  }

  removeRooms(item){
    this.subtractTotalAmount(item)
    const {car} = this.state
    delete car.items[item]
    this.setState(car)
  }

  subtractTotalAmount(item){
    const {car} = this.state
    let price = Number(car.items[item].price)
    let total = car['total'] - price
    car['total'] = total

    this.setState(car)
  }


  render() {
    return (
      <div>
        <Container>
          <Trailcrumb
            hotels={this.state.available}
            location={this.location}
            nameContainer={this.state.location}
            setHotels={this.setHotels}
            addRooms={this.addRooms}
            removeRooms={this.removeRooms}
            addComparation={this.addComparation}
            comparation={this.state.comparation}
            car={this.state.car}
          />
        </Container>
        {this.state.container}
      </div>
    );
  }
}

export default Home;
