/**
*
* SortPrice
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './StyledSP/StyledSP';

function SortPrice() {
  return (
    <Wrapper>
      <FormattedMessage {...messages.header} />
    </Wrapper>
  );
}

SortPrice.propTypes = {

};

export default SortPrice;
