/**
*
* Tab
*
*/
import { Link } from 'react-router';
import React from 'react';
import FormSearch from '../FormSearch/'
import FormSearchHotel from '../ReserHotel/FormSearchHotel/'

import whiteCar from './img/autoWhite.png'
import blueHotel from './img/hotelBlue.png'
import blueCar from './img/auto.png'
import whiteHotel from './img/hotelWhite.png'
import Auto from './auto.png';
import HotelBlue from './hotelBlue.png';
import AutoWhite from './autoWhite.png';
import HotelWhite from './hotelWhite.png';


import styled from 'styled-components';

const Span = styled.span`
  font-size: 25px;
  text-align: center;
`;

function Tab(props) {
  if (props.type == 'car') {
    return (
      <div>
        <div className='tab'>
          <div><Link to='#' onClick={ () => props.tabChange("hotel") }>{props.hotel}<Span className={props.iconHotel}></Span></Link></div>
          <div className='selected'><Link to='' onClick={ () => props.tabChange("car") }>{props.auto}<Span className={props.iconCar}></Span></Link></div>

          <div><Link to='#'>{props.Vuelos}<Span className={props.iconVuelos}></Span></Link></div>
          <div><Link to=''>{props.Cruceros}<Span className={props.iconCrucero}></Span></Link></div>
          <div><Link to='#'>{props.Tours}<Span className={props.iconTours}></Span></Link></div>
          <div><Link to=''>{props.Circuitos}<Span className={props.iconRoute}></Span></Link></div>
          <div><Link to=''>{props.Otro}<Span className={props.iconOtro}></Span></Link></div>
        </div>
        <FormSearch title='Bienvenido' dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <div className='tab'>
          <div className='selected'><Link to='#' onClick={ () => props.tabChange("hotel") }>{props.hotel}<Span className={props.iconHotel}></Span></Link></div>
          <div ><Link to='' onClick={ () => props.tabChange("car") }>{props.auto}<Span className={props.iconCar}></Span></Link></div>

          <div><Link to='#'>{props.vuelo}<Span className={props.iconVuelos}></Span></Link></div>
          <div><Link to=''>{props.Cruceros}<Span className={props.iconCrucero}></Span></Link></div>
          <div><Link to='#'>{props.Tours}<Span className={props.iconTours}></Span></Link></div>
          <div><Link to=''>{props.Circuitos}<Span className={props.iconRoute}></Span></Link></div>
          <div><Link to=''>{props.Otro}<Span className={props.iconOtro}></Span></Link></div>
        </div>
        <FormSearchHotel title='Bienvenido' setLocation={props.setLocation} type={props.type} saveDataHotel={props.saveDataHotel} saveRoomsAdult={props.saveRoomsAdult}/>
      </div>
    )
  }

}

Tab.propTypes = {

};

export default Tab;
