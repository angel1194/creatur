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
          <div><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel<Span className="icon-hotel"></Span></Link></div>
          <div className='selected'><Link to='' onClick={ () => props.tabChange("car") }>Auto<Span className="icon-car"></Span></Link></div>

          <div><Link to='#'>Vuelos<Span className="icon-plane"></Span></Link></div>
          <div><Link to=''>Cruceros<Span className="icon-ship"></Span></Link></div>
          <div><Link to='#'>Tours<Span className="icon-bus"></Span></Link></div>
          <div><Link to=''>Circuitos<Span className="icon-route"></Span></Link></div>
          <div><Link to=''>Otro<Span className="icon-flag"></Span></Link></div>
        </div>
        <FormSearch title='Bienvenido' dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <div className='tab'>
          <div className='selected'><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel<Span className="icon-hotel"></Span></Link></div>
          <div ><Link to='' onClick={ () => props.tabChange("car") }>Auto<Span className="icon-car"></Span></Link></div>

          <div><Link to='#'>Vuelos<Span className="icon-plane"></Span></Link></div>
          <div><Link to=''>Cruceros<Span className="icon-ship"></Span></Link></div>
          <div><Link to='#'>Tours<Span className="icon-bus"></Span></Link></div>
          <div><Link to=''>Circuitos<Span className="icon-route"></Span></Link></div>
          <div><Link to=''>Otro<Span className="icon-flag"></Span></Link></div>
        </div>
        <FormSearchHotel title='Bienvenido' setLocation={props.setLocation} type={props.type} saveDataHotel={props.saveDataHotel}/>
      </div>
    )
  }

}

Tab.propTypes = {

};

export default Tab;
