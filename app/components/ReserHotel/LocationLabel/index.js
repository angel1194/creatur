/**
*
* LocationLabel
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import FontAwesome from 'react-fontawesome';
import Text from './StyledLL/Text';

const FontA = styled(FontAwesome) `
    color: #2b5bac !important;
    padding: 5px
    padding-left: 5px;
    font-weight: 900 !important;
   
    position: relative !important;

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row ;
  align-items: flex-end;
  margin: 0;
`;

function LocationLabel(props) {
  return (
    <Wrapper>
      <Text>{props.Title}</Text>
      <FontA name='map-marker' size="lg" />
    </Wrapper>
  );
}

LocationLabel.propTypes = {
  Title: PropTypes.string
};

export default LocationLabel;
