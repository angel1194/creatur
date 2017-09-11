import React from 'react';
import {Container} from 'semantic-ui-react'
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import Trailcrumb from '../Trailcrumb'
import {setRooms,setHotels} from '../../../containers/Events/Firebase/firebase'
import moment from 'moment'
// import styled from 'styled-components';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents setHotels={this.setHotels.bind(this)} location={()=>this.location(<HotelsManzanero location={this.location}/>, 2)}/>,
    location: 1,
    available:{}
    }
    this.location = this.location.bind(this)

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

    this.location(<HotelsManzanero location={this.location}/>, 2)
  }

  filterNight(night,startDate,endDate){
    if (moment(night).isBetween(moment(startDate),moment(endDate).add(23,'hours').add(59,'minutes').add(59,'seconds'),null,'[]')) {
      return night
    }
  }


  render() {
    return (
      <div>
        <Container>
          <Trailcrumb location={this.location} nameContainer={this.state.location}/>
        </Container>
        {this.state.container}
      </div>
    );
  }
}

export default Home;
