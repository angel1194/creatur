/**
*
* GreenButton
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Button=styled.button`
  width:100%;
  background-color:#87b672;
  padding:10px 50px;
  color:white;
  font-size:14px !important;
  height:40px;
  padding:0px !important;
`;

function GreenButton(props) {
  return (
    <Button>
      {props.text}
    </Button>
  );
}

GreenButton.propTypes = {
  text:PropTypes.string,
};

export default GreenButton;
