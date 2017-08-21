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

    this.test=this.test.bind(this)
  }

  test(key, items){
    const state = this.state
    console.log('key de hotels', key);
    console.log('items de hotels', items);
    this.setState({
      hotels:state.hotels[key]
    })
    console.log('setHotels', state.hotels[key]);
  }

  render() {
    const {hotels} = this.state

    return (
      <div>
        <Container>
          <Div>
            <DivHotels>
              {Object.keys(hotels).map((item, i)=><Hotels key={i} elements={hotels[item]} id={hotels[item].length+=1} test={this.test}/>)}
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
