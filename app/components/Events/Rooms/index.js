import React from 'react';
import {Container} from 'semantic-ui-react';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../HotelRoom';
import InfoHotel from '../InfoHotel';
import InicialState from '../state';

class Rooms extends React.Component {
  constructor(){
    super();
    this.state = InicialState
  }

  render() {
    const {hotels} = this.state

    return (
      <div>
        <Container>
          <InfoHotel/>
          <HeaderTable/>
          {Object.keys(hotels).map((item, i)=><HotelRoom key={i} elements={hotels[item]} addCar={this.addCar}/>)}
        </Container>
      </div>
    );
  }
}

export default Rooms;
