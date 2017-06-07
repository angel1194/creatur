/**
*
* InputKids
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

function InputKids(props) {
  return (
    <div className="section-child">
      <label htmlFor="">Menor {props.Menor}</label>
      <input className="inputs" type="number" min="0" placeholder="10"/>
    </div>
  );
}

InputKids.propTypes = {
  Menor: PropTypes.string
};

export default InputKids;
