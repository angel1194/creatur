/**
*
* InputKids
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';




function InputKids(props) {
  return (
    <div>
      <div className="edad">
        <p>Edad de los menores</p>
      </div>
      <div className="section-dad">
        <div>
          <div className="section-child">
            <label htmlFor="">Menor {props.Menor}</label>
           <input className="inputs" type="number" min="0" placeholder="10"/>
         </div>
        </div>
      </div>
  </div>
  );
}

InputKids.propTypes = {
  Menor: PropTypes.string
};

export default InputKids;
