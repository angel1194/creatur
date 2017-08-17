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
        </Container>
      </Container>
    </div>
    );
}

MainEvents.propTypes = {

};
export default MainEvents;
