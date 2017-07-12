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
            <input className="inputs" type="number" min="0" placeholder="0" name={`${this.props.Menor}Menor${this.props.name}`}/>
          </div>
        </div>
      </div>
  );
  }
}

InputKids.propTypes = {

};

export default InputKids;
