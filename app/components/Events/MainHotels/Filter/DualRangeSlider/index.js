import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import H3 from '../../../../ReserHotel/H3';
import { InputContainer, Wrapper } from './StyledsRange/StyledsRange';
import FlexContainer from '../../../../ReserHotel/FlexContainer';
import FlexItem from '../../../../ReserHotel/FlexItem';

const Container = styled(FlexContainer) `
  height: 35px;
`;

const FlexItemleft = styled(FlexItem) `
  text-align: left;
  margin:0;
  padding-top: 5px;
`;

const FlexItemright = styled(FlexItem) `
  text-align: right;
  padding-top: 5px;
`;

function DualRangeSlider(props) {
  let DualR;

  if (props.Mode === "Money") {
    DualR = (
      <Wrapper>
        <H3>{props.Title}</H3>
        <InputContainer>
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
        </InputContainer>
        <Container>
          <FlexItemleft>$372.00</FlexItemleft>
          <FlexItemright>$1920.00</FlexItemright>
        </Container>
      </Wrapper>
    );
  } else {

    DualR = (
      <Wrapper>
        <H3>{props.Title}</H3>
        <InputContainer>
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
        </InputContainer>
        <Container>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
          <FlexItem>5</FlexItem>
        </Container>
      </Wrapper>
    );

  }
  return DualR;
}

export default DualRangeSlider;
