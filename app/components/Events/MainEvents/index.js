import React from 'react';

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
            hotel='Hotel'
            auto='Hotel y Tickets'
            transport="Transport"
            iconHotel='icon-hotel'
            iconTicket='fa fa-ticket'
            iconTransport='icon-bus'
            location={props.location}
            setHotels={props.setHotels}
           />
         </div>
        </Container>
      </Container>
    </div>
    );
}

MainEvents.propTypes = {

};
export default MainEvents;
