/**
*
* ButtonFormSearch
*
*/

import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

const Buttons = styled.div`
  padding-left: 25px
  width: 80%
`;

function ButtonFormSearch(props) {
    return (
      <Buttons>
          <Button className="buttonCar">¡{props.title}!</Button>
      </Buttons>
    );
  }

ButtonFormSearch.propTypes = {

};

export default ButtonFormSearch;
