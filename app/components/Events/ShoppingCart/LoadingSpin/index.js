/**
*
* LoadingSpin
*
*/

import React from 'react';
import ImgLoading from './Loading.gif'
// import styled from 'styled-components';



function LoadingSpin(props) {
  return (
    <div>
      <div className='divSpin'>
        <img src={ImgLoading}/>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

LoadingSpin.propTypes = {

};

export default LoadingSpin;
