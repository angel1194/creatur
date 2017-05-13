/**
*
* PriceLabel
*
*/

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TextSmall from './StyledPL/TextSmall';
import Price from './StyledPL/Price';
import { Total, Currency } from './StyledPL/Total';
import Wrapper from './StyledPL/Wrapper';



const PriceN = styled(TextSmall) `

  margin:0;
  margin-top:2px !important;
  margin-left:0 !important;
  margin-bottom:0 !important;
  margin-right: 0px;
  text-align: right;
`;



function PriceLabel(props) {

let ComponentMostSold;

if(props.MostSold){
ComponentMostSold = (
  <div>
    <Wrapper>
      <TextSmall>desde</TextSmall>
      <Price>${props.Since}</Price>
      <Currency>{props.Currency}</Currency>
    </Wrapper>
    <PriceN>Precio por noche</PriceN>
  </div>
);
}
else{
  ComponentMostSold = (
  <div>
      <Wrapper>
        <TextSmall>desde</TextSmall>
        <Price>${props.Since}</Price>
        <Currency>{props.Currency}</Currency>
      </Wrapper>
      <PriceN>Precio por noche</PriceN>
      <Total>Total ${props.Total}</Total>
</div>
);
}

  return ComponentMostSold;
}

PriceLabel.propTypes = {
  Since: PropTypes.string,
  Currency: PropTypes.string,
  Total: PropTypes.string,
  Tam: PropTypes.string,
  MostSold: PropTypes.bool
};

export default PriceLabel;
