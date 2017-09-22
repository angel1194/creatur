import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Hotels from '../Hotels';
import MapView from '../../ReserHotel/MapView';
import {Div, DivHotels} from './style';
import Filter from './Filter';

class MainHotels extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hotels:this.props.hotels,
      filterHotels:{},
      filter:false
    }
    this.starFilter = this.starFilter.bind(this)
  }

  starFilter(object){
    let newHotels = {}
    Object.keys(this.state.hotels).map((hotel)=>{
      if (this.state.hotels[hotel].star >= object.min && this.state.hotels[hotel].star <= object.max) {
        newHotels[hotel]=this.state.hotels[hotel]
      }
    })
    this.setState({
      filterHotels:newHotels,
      filter:true
    })
  }

  render() {
    let hotels = this.state.filter == false ? this.state.hotels : this.state.filterHotels
    return (
      <div>
        <Container>
          <Div>
            <div>
              <MapView/>
              <Filter starFilter={this.starFilter}/>
            </div>
            <DivHotels>
              {Object.keys(hotels).map((item, i)=><Hotels addRooms={this.props.addRooms} addComparation={this.props.addComparation} key={i} elements={hotels[item]}/>)}
            </DivHotels>
          </Div>
        </Container>
      </div>
    );
  }
}

export default MainHotels;
