/**
*
* HotelRate
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import WrapperFlex from '../../../components/ReserHotel/WrapperFlex';

function HotelRate() {
  return (
    <WrapperFlex Order={3} Grow={1} Shrink={6} Basis={13}>
      <FormattedMessage {...messages.header} />
    </WrapperFlex>
  );
}

HotelRate.propTypes = {

};

export default HotelRate;
