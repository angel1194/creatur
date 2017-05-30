/**
*
* BarImage
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 5px;
`;

const Div = styled.div`
  position: absolute;
  z-index: 2;
  margin: 10px 0px 0px 0px;
  padding: 2px 20px 2px 20px;
  border-radius: 0px 5px 5px 0px;
  background-color: #FF0000;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
`;

function BarImage(props) {
  return (
    <div>
      <Div>
        <p>Hoy {props.porcent}</p>
      </Div>
      <Img src={props.src} />
    </div>
  );
}

BarImage.propTypes = {
  src:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
]).isRequired,
porcent: PropTypes.string,
};

export default BarImage;
