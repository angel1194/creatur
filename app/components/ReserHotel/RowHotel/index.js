/**
*
* RowHotel
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import WrapperFlex from '../../../components/ReserHotel/WrapperFlex';
import Wrapper from './StyledRowH/Wrapper';
import Column from './StyledRowH/Column';
import Row from './StyledRowH/Row';
import Img from './StyledRowH/Img';
import Title from './StyledRowH/Title';
import ImgD from './defaultHotel.jpg';
import StarRating from '../../../components/ReserHotel/StarRating';
import TripAdvisor from '../../../components/ReserHotel/TripAdvisor';

function generateRowHotel(num) {

  let ArrElm = []
  for (var i = 0; i < num; i++) {
    ArrElm.push(<Wrapper key={i}>
      <Row>
        <img src={ImgD} />
        <Column>
          <Title>Hotel Maldivas Luxury</Title>
          <StarRating />
          <TripAdvisor />
        </Column>
      </Row>
      <Row>Others</Row>

    </Wrapper>);
  }

  return ArrElm;

}

function RowHotel() {
  return (
    <WrapperFlex Overflow="scroll" Order={2} Grow={3} Shrink={1} Basis={60}>
      {generateRowHotel(3)}
    </WrapperFlex>
  );
}

RowHotel.propTypes = {

};

export default RowHotel;
