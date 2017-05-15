/**
*
* MapView
*
*/

import React from 'react';
import styled from 'styled-components';


import { Wrapper, Img, ButtonIcon, Text } from './StyledMap/StyledsM';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FontAwesome from 'react-fontawesome';

const FontA = styled(FontAwesome) `
    color: #ffffff !important;
    padding: 5px
    padding-left: 0;
    position: relative !important;

`;


function MapView() {
  return (
    <Wrapper>    
      <Img>
      <ButtonIcon>
       <FontA name='search'  />
       <Text>Ver Mapa</Text>
      </ButtonIcon>
      </Img>
    </Wrapper>
  );
}

MapView.propTypes = {

};

export default MapView;
