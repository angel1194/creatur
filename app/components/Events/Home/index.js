import React from 'react';
import {Container} from 'semantic-ui-react'
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import Rooms from '../../../containers/Events/Rooms';
import Cart from '../../../containers/Events/Cart';
import Trailcrumb from '../Trailcrumb'
// import styled from 'styled-components';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents location={()=>this.location(<HotelsManzanero location={this.location}/>)}/>,
      location: 'home'
    }
    this.location = this.location.bind(this)
  }

  location(container){
    this.setState({
      container,
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Trailcrumb location={this.location}/>
        </Container>
        {this.state.container}
        {/* <button onClick={()=>this.location(<HotelsManzanero location={this.location}/>)}>Hoteles</button> */}
      </div>
    );
  }
}

export default Home;
