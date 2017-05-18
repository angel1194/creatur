/**
*
* CirclesGreen
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const FontA = styled(FontAwesome) `
    color: #27ae60 !important;
    font-weight: 900 !important;
    margin-left: 5px;
`;

function CirclesGreen() {
  return (
    <div>
      <FontA name='dot-circle-o' size="lg"/>
      <FontA name='dot-circle-o' size="lg"/>
      <FontA name='dot-circle-o' size="lg"/>
      <FontA name='dot-circle-o' size="lg"/>
    </div>
  );
}

CirclesGreen.propTypes = {

};

export default CirclesGreen;
