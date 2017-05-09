/**
*
* Tab
*
*/
import { Link } from 'react-router';
import React from 'react';
import FormSearch from '../FormSearch/'
import Test from '../Test/'
function Tab(props) {
  if (props.type == 'car') {
    return (
      <div>
        <div className='tab'>
          <div className='selected'><Link to='' onClick={ () => props.tabChange("car") }>Auto</Link></div>
          <div><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel</Link></div>
        </div>
        <FormSearch title='Bienvenido'dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <div className='tab'>
          <div ><Link to='' onClick={ () => props.tabChange("car") }>Auto</Link></div>
          <div className='selected'><Link to='#' onClick={ () => props.tabChange("hotel") }>Hotel</Link></div>
        </div>
        <Test/>
      </div>
    )
  }

}

Tab.propTypes = {

};

export default Tab;
