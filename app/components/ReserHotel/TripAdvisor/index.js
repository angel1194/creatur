/**
*
* TripAdvisor
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import logoTripAdvisor from './tripadvisor.png'
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const FontA = styled(FontAwesome) `
    color: #56953f !important;
    font-weight: 900 !important;
    padding-left: 5px;
    position: relative !important;

`;



const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

function TripAdvisor() {
  return (
    <Wrapper>

      <img width="23px" height="14px" src={logoTripAdvisor} />
      <FontA name='circle-thin' size="lg" />
      <FontA name='circle-thin' size="lg" />
      <FontA name='circle-thin' size="lg" />
      <FontA name='circle-thin' size="lg" />
      <FontA name='circle-thin' size="lg" />

    </Wrapper>
  );
}

TripAdvisor.propTypes = {

};

export default TripAdvisor;
