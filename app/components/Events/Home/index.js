import React from 'react';
import {Container} from 'semantic-ui-react'
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import Trailcrumb from '../Trailcrumb'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      container:<MainEvents location={()=>this.location(<HotelsManzanero location={this.location}/>, 2)}/>,
      location: 1
    }
    this.location = this.location.bind(this)
  }

  location(container, location){
    this.setState({
      container,
      location,
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Trailcrumb location={this.location} nameContainer={this.state.location}/>
        </Container>
        {this.state.container}
      </div>
    );
  }
}

export default Home;
