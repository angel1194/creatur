import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Hotels from '../Hotels';
import MapView from '../../ReserHotel/MapView';
import {Div, DivHotels} from './style';

class MainHotels extends React.Component {
  render() {
    let hotels = this.props.hotels

    return (
      <div>
        <Container>
          <Div>
            <div>
              <MapView/>
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
