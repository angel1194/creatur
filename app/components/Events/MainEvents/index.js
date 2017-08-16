/**
*
* MainEvents
*
*/

import React from 'react';
import Tab from '../../Tab';
import {Container, Grid, } from 'semantic-ui-react'
import Hotels from '../Hotels';
import Rooms from '../Rooms';
// import styled from 'styled-components';

class MainEvents extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {/* <Tab
            hotel='Hotel'
            auto='Hotel y Tickets'
            Vuelos="Transport"
            iconHotel='icon-hotel'
            iconCar='icon-car'
            iconVuelos='icon-plane'
          /> */}
          {/* <Rooms/> */}
          <Hotels/>
        </Container>
      </div>
    );
  }
}

export default MainEvents;
