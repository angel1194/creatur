/**
*
* LoadingSpin
*
*/

import React from 'react';
import ImgLoading from './Loading.gif'
// import styled from 'styled-components';



function LoadingSpin(props) {
  function Loading(loading){
    if(loading) {
      return (
        <div className='divSpin'>
          {/*<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>*/}
          <img src={ImgLoading}/>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
  }
  return (
    <div>
      {Loading(props.loading)}
    </div>
  );
}

LoadingSpin.propTypes = {

};

export default LoadingSpin;
