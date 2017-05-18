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

function Tab(props) {
  if (props.type == 'car') {
    return (
      <div>
        <div className='tab'>

          <div><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel <img src={blueHotel} /></Link></div>
          <div className='selected'><Link to='' onClick={ () => props.tabChange("car") }>Auto <img src={whiteCar} /></Link></div>



        </div>
        <FormSearch title='Bienvenido'dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <div className='tab'>

          <div className='selected'><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel <img onClick={ () => props.tabChange("hotel") } src={whiteHotel} /></Link></div>
          <div ><Link to='' onClick={ () => props.tabChange("car") }>Auto <img src={blueCar} /></Link></div>



        </div>
        <FormSearchHotel title='Bienvenido'/>
      </div>
    )
  }

}

Tab.propTypes = {

};

export default Tab;
