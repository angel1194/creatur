/**
*
* TripAdvisor
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const FontA = styled(FontAwesome) `
    color: #56953f !important;
    padding: 5px
    padding-left: 0;
    font-weight: 900 !important;
    
    position: relative !important;

`;


const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

function TripAdvisor() {
  return (
    <Wrapper>
       <FontA name='tripadvisor' size="lg" />
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
