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
      star:{
        min:1,
        max:5
      },
      price:{
        min:300,
        max:3000
      }
    }
    this.setFilterValue = this.setFilterValue.bind(this)
  }

  setFilterValue(filter,object){
    console.log('ejecutando');
    if (filter == 'star') {
      this.setState({
        star:object
      })
    }
    else{
      this.setState({
        price:object
      })
    }
  }

  starFilter(){
    let hotelsFiltered={}
    Object.keys(this.state.hotels).filter((hotelKey,i)=>{
      let aryRooms=[]
      if (this.state.hotels[hotelKey].star >= this.state.star.min &&  this.state.hotels[hotelKey].star <= this.state.star.max ) {
        Object.keys(this.state.hotels[hotelKey].rooms).map((roomKey)=>{
          if (this.state.hotels[hotelKey].rooms[roomKey].idHotel == hotelKey) {
            if (this.state.hotels[hotelKey].rooms[roomKey].price >= this.state.price.min && this.state.hotels[hotelKey].rooms[roomKey].price <= this.state.price.max) {
                aryRooms.push(this.state.hotels[hotelKey].rooms[roomKey])
            }
          }
        })
        if (aryRooms.length > 0) {
          hotelsFiltered[hotelKey]=this.state.hotels[hotelKey]
          hotelsFiltered[hotelKey]['rooms']=aryRooms
        }
      }
    })
    return hotelsFiltered
  }

  render() {
    let funcion = this.starFilter()
    return (
      <div>
        <Container>
          <Div>
            <div>
              <MapView/>
              <Filter setFilterValue={this.setFilterValue} star={this.state.star} price={this.state.price}/>
            </div>
            <DivHotels>
              {
                Object.keys(funcion).map((hotel,i) => <Hotels addRooms={this.props.addRooms} addComparation={this.props.addComparation} key={i} elements={funcion[hotel]}/>)
              }
            </DivHotels>
          </Div>
        </Container>
      </div>
    );
  }
}

export default MainHotels;
