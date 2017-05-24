/**
*
* RowHotel
*
*/

import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router';

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

const ColumMarginRight = styled(Column) `

  margin-right: 10px;
  margin-top: 10px;
  align-items: flex-start;

`;

const ColumMarginTop = styled(Column) `

  margin-top: 10px;
  align-items: flex-start;
  padding-left: 10px;

`;

function generateRowHotel(num) {

  let TiltesHotel = ["Aberotel Montparnasse", "LEGEND", "Hotel Acadia - Astotel", "Chouette Hotel"];
  let ANumStars = [3.0, 4.0, 3.0, 3.0];
  let ALocations = ["RUE BLOMET 24", "RUE DE RENNES 151 bis", "4 Rue Geoffroy Marie", "237 Rue De La Convention"];
  let APrice = [{ price1: "678.12", price2: "434.80" }, { price1: "554.35", price2: "840.18" }, { price1: "382.93", price2: "382.93" }, { price1: "372.00", price2: "521.00" }];
  let AImage = ["https://media-cdn.tripadvisor.com/media/photo-s/03/ff/ae/c2/aberotel-montparnasse.jpg",
    "http://www.hotel-r.net/im/hotel/de/legend-hotel.jpg", "http://media-cdn.tripadvisor.com/media/photo-s/0c/08/a9/0d/hotel-acadia-astotel.jpg",
    "http://www.france-voyage.com/visuals/hotels/gite-auberge-chouette-768674-22205673_w600.jpg"
  ]
  let ArrElm = []
  for (var i = 0; i < num; i++) {
    ArrElm.push(<Wrapper key={i}>
      <Row>
        <Img src={AImage[i]} Width={"200px"} />
        <ColumMarginTop>
          <Title>{TiltesHotel[i]}</Title>
          <StarRating NumStart={ANumStars[i]} />
          <TripAdvisor />
          <LocationLabel Title={ALocations[i]} />
        </ColumMarginTop>
      </Row>
      <Row>
        <ColumMarginRight>
          <PriceLabel Tam={"Com"} Since={APrice[i].price1} Currency={"USD"} Total={APrice[i].price2} />
          <Link to="/hotel/quotation">
          <Button Title={"Comprar"} Color={"Blue"}  />
        </Link>
        </ColumMarginRight>
      </Row>

    </Wrapper>);
  }

  return ArrElm;

}

function RowHotel() {
  return (
    <WrapperFlex Order={2} Grow={3} Shrink={1} Basis={60}>
      {generateRowHotel(4)}
    </WrapperFlex>
  );
}

RowHotel.propTypes = {

};

export default RowHotel;
