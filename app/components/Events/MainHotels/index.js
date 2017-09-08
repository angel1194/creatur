import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Hotels from '../Hotels';
import MapView from '../../ReserHotel/MapView';
import InicialState from '../state';
import {Div, DivHotels} from './style';

class MainHotels extends React.Component {
  constructor(props){
    super(props);
    this.state = InicialState

    this.addRooms=this.addRooms.bind(this)
  }

  addRooms(rooms){
    const state = this.state.car
    if (!(rooms.key in state.items)) {
      state.items[rooms.key] = rooms
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

  render() {
    const {hotels, night} = this.state

    return (
      <div>
        <Container>
          <Div>
            <DivHotels>
              {Object.keys(hotels).map((item, i)=><Hotels location={this.props.location} addRooms={this.addRooms} key={i} elements={hotels[item]}/>)}
            </DivHotels>
            <div>
              <MapView/>
            </div>
          </Div>
        </Container>
      </div>
    );
  }
}

export default MainHotels;
