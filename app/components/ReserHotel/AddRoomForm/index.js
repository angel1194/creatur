/**
*
* AddRoomForm
*
*/

import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  background-color: red;
  width: 2px;
`;

class AddRoomForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Line></Line>
      <div className="dad-reserv">
        <div className="child">
          <label htmlFor="">Habitaciones</label>
          <input className="inputs" type="number" min="0" placeholder="10"/>
        </div>
        <div className="child">
          <label htmlFor="">Adultos</label>
          <input className="inputs" type="number" min="0" placeholder="10"/>
        </div>
        <div className="child">
          <label htmlFor="">Ninos</label>
          <input id='inputChild' className="inputs" type="number" min="0" placeholder="10"/>
        </div>
      </div>
    </div>
    );
  }
}

AddRoomForm.propTypes = {

};

export default AddRoomForm;
