import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Hotels from '../Hotels';
import MapView from '../../ReserHotel/MapView';
import InicialState from '../state';
import {Div, DivHotels} from './style';
import Rooms from '../../../containers/Events/Rooms';

class MainHotels extends React.Component {
  constructor(props){
    super(props);
    this.state = InicialState

    this.addRooms=this.addRooms.bind(this)
    this.addComparison=this.addComparison.bind(this)
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

  addComparison(item){
    this.props.location(<Rooms/>, 3)
    const {comparisonRoom} = this.state
    comparisonRoom[item] = item
    this.setState({comparisonRoom})
  }

  render() {
    const {hotels, night} = this.state
    const available = this.props.state

    return (
      <div>
        <Container>
          {console.log('state available',available)}
          <Div>
            <DivHotels>
              {Object.keys(available).map((item, i)=><Hotels addRooms={this.addRooms} addComparison={this.addComparison} key={i} elements={available[item]}/>)}
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
