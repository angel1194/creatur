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

function Tab(props) {
  if (props.type == 'car') {
    return (
      <div>
        <div className='tab'>
          <div><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel</Link><img src={blueHotel} /></div>
          <div className='selected'><Link to='' onClick={ () => props.tabChange("car") }>Auto</Link><img src={whiteCar} /></div>
        </div>
        <FormSearch title='Bienvenido'dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <div className='tab'>
          <div className='selected'><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel</Link><img src={whiteHotel} /></div>
          <div ><Link to='' onClick={ () => props.tabChange("car") }>Auto</Link><img src={blueCar} /></div>
        </div>
        <FormSearchHotel title='Bienvenido'/>
      </div>
    )
  }

}

Tab.propTypes = {

};

export default Tab;
