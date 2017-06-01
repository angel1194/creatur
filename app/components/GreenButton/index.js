/**
*
* GreenButton
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';




function GreenButton(props) {
  const ButtonG=styled.button`
    width:100%;
    background-color:#87b672;
    padding:10px 50px;
    color:white;
    font-size:14px !important;
    height:40px;
    padding:0px !important;
    border-radius: 6px !important;
  `;

  return (
    <ButtonG>
      {props.text}
    </ButtonG>
  );
}

GreenButton.propTypes = {
  text:PropTypes.string,
};

export default GreenButton;
