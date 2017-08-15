/**
*
* MainEvents
*
*/

import React from 'react';
import Tab from '../../Tab';
import {Container, Grid, } from 'semantic-ui-react'
// import styled from 'styled-components';
class MainEvents extends React.Component {
  render() {
    return (
      <div>
        <Container className= 'containerFormSearch'>
          {/* <div className='ui container containerForm'> */}
          <Tab
            hotel='Hotel'
            auto='Hotel y Tickets'
            Vuelos="Transport"
            iconHotel='icon-hotel'
            iconCar='icon-car'
            iconVuelos='icon-plane'
          />
        {/* </div> */}
        </Container>
      </div>
    );
  }
}

export default MainEvents;
