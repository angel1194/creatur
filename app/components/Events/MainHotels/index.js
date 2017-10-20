import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Hotels from '../Hotels';
import MapView from '../../ReserHotel/MapView';
import {Div, DivHotels, Title, DivCheck, Check} from './style';
import Filter from './Filter';
import { default as Fade } from 'react-fade';

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
      },
      fadeOut: false,
      visibility: 'visible',
      fadeDuration:1
    }
    this.setFilterValue = this.setFilterValue.bind(this)

  }



  componentDidUpdate(nextProps, { fadeOut }) {

      if (fadeOut) {
        setTimeout(() => {
          this.setState({
            visibility: 'hidden'
          })
        }, this.state.fadeDuration)
      }
    }

  setFilterValue(filter,object){
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

    let hotelsFiltered=[]
    this.state.hotels.map((hotelObject,i)=>{
      Object.keys(hotelObject).filter((hotelKey)=>{
        let aryRooms=[]
        if (this.state.hotels[i][hotelKey].star >= this.state.star.min &&  this.state.hotels[i][hotelKey].star <= this.state.star.max ) {
          Object.keys(this.state.hotels[i][hotelKey].rooms).map(roomKey=>{
            if (this.state.hotels[i][hotelKey].rooms[roomKey].idHotel == hotelKey) {
              if (this.state.hotels[i][hotelKey].rooms[roomKey].price >= this.state.price.min && this.state.hotels[i][hotelKey].rooms[roomKey].price <= this.state.price.max) {
                aryRooms.push(this.state.hotels[i][hotelKey].rooms[roomKey])
              }
            }
          })
          if (aryRooms.length > 0) {
            let objectHotels={
              [hotelKey]:this.state.hotels[i][hotelKey]
            }
            objectHotels[hotelKey]['rooms']=aryRooms
            hotelsFiltered.push(objectHotels)
          }
        }
      })
    })
    return hotelsFiltered
  }

  render() {
    let funcion = this.starFilter()
    let room1 = this.state.hotels[0]
    Object.keys(room1).map((item, i)=>{
      console.log(room1[item].rooms[0].price);
    })

    return (
      <div>
        <Container>
          <DivCheck>
            <Title>Se encontraron {this.state.hotels.length} Hoteles disponibles</Title>
            {/* <Check>Hola</Check> */}
          </DivCheck>
          <Div>
            <div>
              <MapView/>
              <Filter setFilterValue={this.setFilterValue} star={this.state.star} price={this.state.price} />
            </div>
            <DivHotels>
              <Fade
               out={this.state.fadeOut}
               duration={this.state.fadeDuration}
               style={{visibility: this.state.visibility}}>
              {
                funcion.map((object,i)=>
                  Object.keys(object).map((hotel)=>{
                    return(<Hotels  addRooms={this.props.addRooms} addComparation={this.props.addComparation} key={i} elements={object[hotel]}/>)
                  })
                )
              }
              </Fade>
            </DivHotels>
          </Div>
        </Container>
      </div>
    );
  }
}


export default MainHotels;
