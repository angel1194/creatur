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

    this.addCar=this.addCar.bind(this)
  }

  addCar(rooms){
    console.log(rooms['room0']);
    // const {items}= this.state.car
    //
    //
    // items[Date.now()] = rooms[0]
    //
    //
    // this.setState({
    //   car:items
    // })
    // console.log(this.state);
  }

  render() {
    const {night} = this.state

    return (
      <div>
        <Container>
          <InfoHotel/>
          <HeaderTable/>
          {Object.keys(night).map((item, i)=><HotelRoom key={i} elements={night[item]} addCar={this.addCar}/>)}
        </Container>
      </div>
    );
  }
}

export default Rooms;
