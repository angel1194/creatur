/**
*
* BarFilters
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './StyledBarF/StyledBF';

function BarFilters() {
  return (
    <Wrapper>
      <FormattedMessage {...messages.header} />
    </Wrapper>
  );
}

BarFilters.propTypes = {

};

export default BarFilters;
