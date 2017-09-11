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
    const {comparisonRoom} = this.state

    return (
      <div>
        <Container>
          {Object.keys(comparisonRoom).map((item , i)=><InfoHotel key={i} elements={comparisonRoom[item]}/>)}
          <HeaderTable/>
          {Object.keys(comparisonRoom).map((item, i)=><HotelRoom key={i} elements={comparisonRoom[item]}/>)}
        </Container>
      </div>
    );
  }
}

export default Rooms;
