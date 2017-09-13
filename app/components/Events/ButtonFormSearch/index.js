/**
*
* ButtonFormSearch
*
*/

import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

function ButtonFormSearch(props) {
    return (
      <div className='divButtonCar'>
          <Button className="buttonCar" onClick={props.addTransport ? ()=>props.addTransport() : ''}>¡{props.title}!</Button>
      </div>
    );
  }

ButtonFormSearch.propTypes = {

};

export default ButtonFormSearch;
