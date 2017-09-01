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

    // this.getRooms=this.getRooms.bind(this)
  }

  getRooms(){
    let state = this.state.night
    let key = Object.keys(state)

    for (var i = 0; i <= key.length; i++) {
      return key[i]
    }
  }

  render() {
    const {hotels, night} = this.state
    const items = this.getRooms()

    return (
      <div>
        <Container>
          {console.log(items)}
          <Div>
            <DivHotels>
              {Object.keys(hotels).map((item, i)=><Hotels key={i} elements={hotels[item]} stateNight={night} stateHotels={item}/>)}
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
