import React, { PropTypes } from 'react';
import {Wrapper, Text, Line} from './StyledTitle/StyledsTitles';

function Title(props) {
  return (
    <Wrapper>
      <Text>{props.Title}</Text>
      <Line />
    </Wrapper>

  );
}

export default Title;
