import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Hotels from '../Hotels';
import MapView from '../../ReserHotel/MapView';
import {Div, DivHotels} from './style';
import Filter from './Filter';

class MainHotels extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hotels:this.props.hotels,
      filterHotels:{},
      filter:false
    }
    this.starFilter = this.starFilter.bind(this)
    this.priceFilter = this.priceFilter.bind(this)
  }

  starFilter(object){
    let newHotels = {}
    if (Object.keys(this.state.filterHotels).length > 0) {
      Object.keys(this.state.filterHotels).map((hotel)=>{
        if (this.state.filterHotels[hotel].star >= object.min && this.state.filterHotels[hotel].star <= object.max) {
          newHotels[hotel]=this.state.filterHotels[hotel]
        }
      })
      this.setState({
        filterHotels:newHotels,
        filter:true
      })
    }else {
      Object.keys(this.state.hotels).map((hotel)=>{
        if (this.state.hotels[hotel].star >= object.min && this.state.hotels[hotel].star <= object.max) {
          newHotels[hotel]=this.state.hotels[hotel]
        }
      })
      this.setState({
        filterHotels:newHotels,
        filter:true
      })
    }
  }

  priceFilter(object){
    let newHotels={}
    if (Object.keys(this.state.filterHotels).length > 0 ) {
      Object.keys(this.state.filterHotels).map(hotelKey=>{
        let newRooms=[]
        let aryRooms = this.state.filterHotels[hotelKey].rooms
        aryRooms.map((room)=>{
          if (room.idHotel === hotelKey) {
            if (room.price >= object.min && room.price <= object.max) {
              newRooms.push(room)
            }
          }
        })
        if (newRooms.length > 0) {
          newHotels[hotelKey]=this.state.filterHotels[hotelKey]
          newHotels[hotelKey]['rooms']=newRooms
        }
      })
      this.setState({
        filterHotels:newHotels
      })
    }
    else{
      Object.keys(this.state.hotels).map(hotelKey=>{
        let newRooms=[]
        let aryRooms = this.state.hotels[hotelKey].rooms
        aryRooms.map((room)=>{
          if (room.idHotel === hotelKey) {
            if (room.price >= object.min && room.price <= object.max) {
              newRooms.push(room)
            }
          }
        })
        if (newRooms.length > 0) {
          newHotels[hotelKey]=this.state.hotels[hotelKey]
          newHotels[hotelKey]['rooms']=newRooms
        }
      })
      this.setState({
        filterHotels:newHotels,
        filter:true
      })
    }
  }

  render() {
    let hotels = this.state.filter == false ? this.state.hotels : this.state.filterHotels
    return (
      <div>
        <Container>
          <Div>
            <div>
              <MapView/>
              <Filter starFilter={this.starFilter} priceFilter={this.priceFilter}/>
            </div>
            <DivHotels>
              {Object.keys(hotels).map((item, i)=><Hotels addRooms={this.props.addRooms} addComparation={this.props.addComparation} key={i} elements={hotels[item]}/>)}
            </DivHotels>
          </Div>
        </Container>
      </div>
    );
  }
}

export default MainHotels;
