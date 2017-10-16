import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Text from './StyledLL/Text';

const FontA = styled(FontAwesome) `
  color: #2b5bac !important;
  padding: 0px 5px 4px 0px;
  padding-left: 5px;
  font-weight: 900 !important;
  position: relative !important;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 8px 5px 0px 0px;

`;

function LocationLabel(props) {
  return (
    <Wrapper>
      <FontA name='map-marker' size="lg" />
      <Text>{props.Title}</Text>
    </Wrapper>
  );
}

export default LocationLabel;
