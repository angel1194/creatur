/**
*
* DualRangeSlider
*
*/

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import C from './StyledsRange/C';
import D from './StyledsRange/D';
import Fl from './StyledsRange/Fl';
import H from './StyledsRange/H';
import Pos from './StyledsRange/Pos';
import Ta from './StyledsRange/Ta';
import W from './StyledsRange/W';
import H3 from '../H3';
import InputStyled from './StyledsRange/InputStyled';

import FlexContainer from '../FlexContainer';
import FlexItem from '../FlexItem';
import '../../../fonts/RobotoRegular.ttf';

const Lh4 = styled.p`

  text-align: left;
  margin : 0;
  color: #6d6d6d;
  font-family: Roboto Regular;
`;

const LhC = styled.p`

  text-align: center;
  margin : 0;
  color: #6d6d6d;
  font-family: Roboto Regular;
`;

const Rh4 = styled.p`
  color: #6d6d6d;
  text-align: right;
  margin : 0;
   font-family: Roboto Regular;
`;

const Mlh4 = styled.p`

  text-align: left;
  margin-left: 26%;
  margin-top: 0;
  margin-bottom : 0;
  color: #6d6d6d;
 font-family: Roboto Regular;
`;

const Mrh4 = styled.p`

  text-align: right;
  margin-right: 26%;
  margin-top: 0;
  margin-bottom : 0;
  color: #6d6d6d;
 font-family: Roboto Regular;

`;



const Wtop = css`

  margin-top: 15px;

`;

const Wrapper = styled.div`${W}${Wtop}`;
const PriceLeft = styled.div`${D}${C}`;
const PriceRight = styled.div`${D}${Fl}`;
const DivWrapper = styled.div`${InputStyled}${Pos}${Ta}${H}`;



function DualRangeSlider(props) {
  let DualR;

  if (props.Mode === "Money") {
    DualR = (
      <Wrapper>
        <H3>{props.Title}</H3>
        <DivWrapper>
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
        </DivWrapper>
        <PriceLeft><Lh4>$0.0</Lh4></PriceLeft>
        <PriceRight><Rh4>$0.0</Rh4></PriceRight>
      </Wrapper>
    );
  } else {

    DualR = (
      <Wrapper>
        <H3>{props.Title}</H3>
        <DivWrapper>
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
          <input type="range" step={props.Step} min={props.Min} max={props.Max} />
        </DivWrapper>
        <FlexContainer>
          <FlexItem><Lh4>1</Lh4></FlexItem>
          <FlexItem><Mlh4>2</Mlh4></FlexItem>
          <FlexItem><LhC>3</LhC></FlexItem>
          <FlexItem><Mrh4>4</Mrh4></FlexItem>
          <FlexItem><Rh4>5</Rh4></FlexItem>
        </FlexContainer>
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
