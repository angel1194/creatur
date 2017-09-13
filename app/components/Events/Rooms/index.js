import React from 'react';
import {Container} from 'semantic-ui-react';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../HotelRoom';
import InfoHotel from '../InfoHotel';

class Rooms extends React.Component {

  render() {
    const comparation = this.props.comparation
    const state = this.props.stateAll
    return (
      <div>
        <Container>
          {Object.keys(comparation).map((item , i)=><InfoHotel key={i} elements={comparation[item]}/>)}
          <HeaderTable/>
          {Object.keys(comparation).map((item, i)=><HotelRoom key={i} elements={comparation[item]} addRooms={this.props.addRooms} night={state}/>)}
        </Container>
      </div>
    );
  }
}

export default Rooms;
