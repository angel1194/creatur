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
    state.items[Date.now()] = rooms
    this.setState(state)
    console.log(state);
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
