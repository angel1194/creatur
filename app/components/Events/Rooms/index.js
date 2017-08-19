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
    let test = Object.keys(hotels['001'])

    return (
      <div>
        <Container>
          {console.log(test['items'])}
          <InfoHotel/>
          <HeaderTable/>
          {Object.keys(hotels).map((item, i)=><HotelRoom key={i} elements={hotels[item]}/>)}
          <Divider/>
        </Container>
      </div>
    );
  }
}

export default Rooms;
