/**
*
* RowHotel
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import WrapperFlex from '../../../components/ReserHotel/WrapperFlex';
import { Wrapper, WrapperTrans, Column, Row, Title, Img } from './StyledRowH/StyledRowH';



import ImgD from './defaultHotel.jpg';
import StarRating from '../../../components/ReserHotel/StarRating';
import TripAdvisor from '../../../components/ReserHotel/TripAdvisor';
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
import Button from '../../../components/ReserHotel/Button';
import OffersDay from '../OffersDay';
import BarImgOffers from '../BarImgOffers';

import AddCheckList from '../../AddCheckList';

const ColumMarginRight = styled(Column) `
  margin-right: 10px;
  margin-top: 10px;
  align-items: flex-end;
`;

const ColumMarginTop = styled(Column) `
  margin-top: 10px;
  align-items: flex-start;
  padding-left: 10px;
`;

function generateRowHotel(ArrHotels) {

  let ArrElm = ArrHotels.map((element, i) => {



    return (<Column>
      <Wrapper>
        <Row>

          <Img src={"http://via.placeholder.com/200x156"} Width={"200px"} Height={"156px"} />

          <ColumMarginTop>
            <Title>{element.Hotel.Name}</Title>
            <StarRating NumStart={element.Rating.TextValue} />
            <TripAdvisor Calification={(element.TripAdvisor == null) ? "0.0" : element.TripAdvisor.CategoryValue } />
            <LocationLabel Title={element.Line[0].TextValue} />
          </ColumMarginTop>
        </Row>
        <Row>
          <ColumMarginRight>
            <PriceLabel Tam={"Com"} Since={element.Rate[0].RatePrice[1].TextValue} Currency={"USD"} Total={parseInt(element.Rate[0].RatePrice[1].TextValue) * 4} />

            <AddCheckList id={"bt" + i} JustifyContent="flex-end" Margin="20px" />
            <Link to="/hotel/quotation">
              <Button Title={"Comparar"} Color={"Blue"} />
            </Link>

          </ColumMarginRight>
        </Row>
      </Wrapper>
      <WrapperTrans>
    <OffersDay ArrRoom={element.Rate} />

      </WrapperTrans>
    </Column>);
  });


  return ArrElm;
}

function RowHotel(props) {
  return (
    <div>
      {generateRowHotel(props.Results)}
    </div>
  );
}

RowHotel.propTypes = {
  Results: PropTypes.array
};

export default RowHotel;
