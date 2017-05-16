/**
*
* SortPrice
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Wrapper, InputText, TextBold} from './StyledSP/StyledSP';

function SortPrice() {
  return (
    <Wrapper>
      <TextBold>Ordenar Por: </TextBold>
      <InputText type="text" placeholder="Precio" />
    </Wrapper>
  );
}

SortPrice.propTypes = {

};

export default SortPrice;
