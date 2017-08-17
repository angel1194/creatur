import React from 'react';
import {Container} from 'semantic-ui-react';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../HotelRoom';
import InfoHotel from '../InfoHotel';
import {Divider} from './style'

class Rooms extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <InfoHotel/>
          <HeaderTable/>
          <HotelRoom NameRoom='Doble Standard'/>
          <Divider/>
          <HotelRoom NameRoom='Doble 2 Camas Standard'/>
        </Container>
      </div>
    );
  }
}

export default Rooms;
