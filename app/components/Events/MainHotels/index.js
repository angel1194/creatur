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
  }

  render() {
    const {hotels} = this.state

    return (
      <div>
        <Container>
          <Div>
            <DivHotels>
              {Object.keys(hotels).map((item, i)=><Hotels key={i} elements={hotels[item]} stateNight={this.state.night}/>)}
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
