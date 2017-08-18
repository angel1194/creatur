import React from 'react';
import {Container} from 'semantic-ui-react';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../HotelRoom';
import InfoHotel from '../InfoHotel';
import {Divider} from './style';
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
        {console.log(hotels['001'].items.personas)}
        <Container>
          <InfoHotel/>
          <HeaderTable/>
          {Object.keys(hotels).map((item, i)=>console.log('items de hotels',hotels[item].items))}
          <HotelRoom/>
          <Divider/>
          <HotelRoom/>
        </Container>
      </div>
    );
  }
}

export default Rooms;
