/**
*
* AddRoomForm
*
*/

import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  background-color: #70a0ec;
  height: 3px;
  width: 95%;
  margin-bottom: 5px;
`;

class AddRoomForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.show) {
    return null;
  }
    return (
      <div>
        <Line/>
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
            <label htmlFor="">Niños (0-7)</label>
            <input className="inputs" type="number" max="2" placeholder="10"/>
          </div>
        </div>
      </div>
    );
  }
}

AddRoomForm.propTypes = {

};

export default AddRoomForm;
