/**
*
* AddInputKids
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


function AddInputKids(props) {
  return (
    <div>
      <div className="section-child">
        <label htmlFor="">Menor {props.Menor}</label>
       <input className="inputs" type="number" min="0" placeholder="10"/>
     </div>
    </div>
  );
}

AddInputKids.propTypes = {
  Menor: PropTypes.int,
};

export default AddInputKids;
