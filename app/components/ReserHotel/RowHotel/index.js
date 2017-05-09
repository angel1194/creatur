/**
*
* RowHotel
*
*/

import React from 'react';
import styled from 'styled-components';

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
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
import Button from '../../../components/ReserHotel/Button';

const ColumMargin = styled(Column) `

 margin-right: 10px;
 align-items: flex-end;
`;

function generateRowHotel(num) {

  let ArrElm = []
  for (var i = 0; i < num; i++) {
    ArrElm.push(<Wrapper key={i}>
      <Row>
        <Img src={ImgD} Width={"200px"} />
        <Column>
          <Title>Hotel Maldivas Luxury</Title>
          <StarRating />
          <TripAdvisor />
          <LocationLabel />
        </Column>
      </Row>
      <Row>
        <ColumMargin>
          <PriceLabel Tam={"Com"} Since={"3,089.56"} Currency={"USD"} Total={"1,200.56"} />
          <Button Title={"Comprar"} Color={"Blue"} />
        </ColumMargin>
      </Row>

    </Wrapper>);
  }

  return ArrElm;

}

function RowHotel() {
  return (
    <WrapperFlex Order={2} Grow={3} Shrink={1} Basis={60}>
      {generateRowHotel(5)}
    </WrapperFlex>
  );
}

RowHotel.propTypes = {

};

export default RowHotel;
