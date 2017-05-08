/**
*
* Title
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './StyledTitle/Wrapper';
import Text from './StyledTitle/Text';
import Line from './StyledTitle/Line';



function Title(props) {
  return (
    <Wrapper>
      <Text>{props.Title}</Text>
      <Line />


    </Wrapper>

  );
}

Title.propTypes = {
  Title: PropTypes.string

};

export default Title;
