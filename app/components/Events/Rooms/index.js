import React from 'react';
import {Container} from 'semantic-ui-react';
import styled from 'styled-components';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../HotelRoom';
import InfoHotel from '../InfoHotel';

const Divider=styled.div`
  width:100%;
  border:1px solid #58ACFA ;
`;

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
