/**
*
* MainEvents
*
*/

import React from 'react';
<<<<<<< HEAD
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
          <Tab
=======

import {Container, Grid, } from 'semantic-ui-react';
import FormSearch from '../../FormSearch/';
import Promo from '../../Promo/';
import TabEvents from '../TabEvents';
import MainSlider from '../../MainSlider/';
import Comments from '../../Comments';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import styled from 'styled-components';

function MainEvents (props){
    return (
      <div>
        <Container fluid className='slider'>
         <Container className= 'containerFormSearch' fluid>
          <MainSlider />
          <div className='ui container containerForm'>
           <TabEvents
>>>>>>> fb6a612add255c0b31d3e5a75b5f0c3e6893d06e
            hotel='Hotel'
            auto='Hotel y Tickets'
            transport="Transport"
            iconHotel='icon-hotel'
            iconCar='icon-car'
<<<<<<< HEAD
            iconVuelos='icon-plane'
          />
          {/* <Rooms/> */}
          {/* <Hotels/> */}
=======
            iconTransport='icon-bus'
            saveRoomsAdult={props.saveRoomsAdult}
            saveDataHotel={props.saveDataHotel}
            setLocation={props.setLocation}
            type={props.type}
            tabChange={props.tabChange}
            dataUI={props.dataUI}
            loading={props.loading}
            resetState={props.resetState}
            loadingTrue={props.loadingTrue}
            saveDate={props.saveDate}
            saveLocation={props.saveLocation}
           />
         </div>
>>>>>>> fb6a612add255c0b31d3e5a75b5f0c3e6893d06e
        </Container>
      </Container>
    </div>
    );
}

MainEvents.propTypes = {

};
export default MainEvents;
