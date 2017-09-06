import React from 'react';
import {Container} from 'semantic-ui-react'
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import Rooms from '../../../containers/Events/Rooms'
// import styled from 'styled-components';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents/>
    }
    this.location = this.location.bind(this)
  }

  location(container){
    console.log('ejecutando location');
    this.setState({
      container,
    })
  }

  render() {
    return (
      <div>
        {this.state.container}
        <button onClick={()=>this.location(<HotelsManzanero location={this.location}/>)}>Hoteles</button>
      </div>
    );
  }
}

export default Home;
