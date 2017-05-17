/**
*
* Tab
*
*/
import { Link } from 'react-router';
import React from 'react';
import FormSearch from '../FormSearch/'
import FormSearchHotel from '../ReserHotel/FormSearchHotel/'
import Auto from './auto.png';
import HotelBlue from './hotelBlue.png';
import AutoWhite from './autoWhite.png';
import HotelWhite from './hotelWhite.png';
function Tab(props) {
  if (props.type == 'car') {
    return (
      <div>
        <div className='tab'>
          <div className='selected'><Link to='' onClick={ () => props.tabChange("car") }><img src={AutoWhite}/>Auto</Link></div>
          <div><Link to='#' onClick={ () => props.tabChange("hotel") }><img src={HotelBlue}/>Hotel</Link></div>
        </div>
        <FormSearch title='Bienvenido'dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <div className='tab'>
          <div ><Link to='' onClick={ () => props.tabChange("car") }><img src={Auto}/>Auto</Link></div>
          <div className='selected'><Link to='#' onClick={ () => props.tabChange("hotel") }><img src={HotelWhite}/>Hotel</Link></div>
        </div>
        <FormSearchHotel title='Bienvenido'/>
      </div>
    )
  }

}

Tab.propTypes = {

};

export default Tab;
