/**
*
* StarRating
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


const FontA = styled(FontAwesome) `
     color: #f5d21a !important;
    padding: 5px
    padding-left: 0;
    font-weight: 900 !important;
    top:-10px !important;
    position: relative !important;

`;

const FontB =  styled(FontA) `
    color: #f5d21a !important;
    padding: 5px
    padding-left: 10px;
    font-weight: 900 !important;
    top:-10px !important;
    position: relative !important;

`;


function StarRating() {
  return (
    <div>

      <FontB name='star' size="lg" />
      <FontA name='star' size="lg" />
      <FontA name='star' size="lg" />
      <FontA name='star' size="lg" />
      <FontA name='star' size="lg" />

    </div>
  );
}

StarRating.propTypes = {

};

export default StarRating;
