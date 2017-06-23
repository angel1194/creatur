/**
*
* InputKids
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

class InputKids extends React.Component {

  render (){
    return (
      <div className="section-dad">
        <div>
          <div className="section-child">
            <label htmlFor="">Menor {this.props.Menor}</label>
            <input className="inputs" type="number" min="0" placeholder="10"/>
          </div>
        </div>
      </div>
  );
  }
}

InputKids.propTypes = {

};

export default InputKids;
