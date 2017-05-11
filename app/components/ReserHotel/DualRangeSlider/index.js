/**
*
* DualRangeSlider
*
*/

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import H3 from '../H3';
import { InputContainer, Wrapper } from './StyledsRange/StyledsRange';

import FlexContainer from '../FlexContainer';
import FlexItem from '../FlexItem';





function DualRangeSlider(props) {
  let DualR;

  if (props.Mode === "Money") {
    DualR = (
      <Wrapper>
        <H3>{props.Title}</H3>
        <InputContainer>
        h
          <input type="range" />
          h2
          <input type="range" />
          h3
        </InputContainer>
      </Wrapper>
    );
  } else {

    DualR = (
      <Wrapper>
        <H3>{props.Title}</H3>
        <InputContainer>
          <input type="range" />
          <input type="range" />
        </InputContainer>
      </Wrapper>
    );

  }

  return DualR;

}

DualRangeSlider.propTypes = {
  Title: PropTypes.string,
  Step: PropTypes.string,
  Min: PropTypes.string,
  Max: PropTypes.string,
  Mode: PropTypes.string
};

export default DualRangeSlider;
