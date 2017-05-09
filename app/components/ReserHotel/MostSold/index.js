/**
*
* MostSold
*
*/

import React from 'react';
import styled from 'styled-components';
import Column from './StyledMS/Column';
import Row from './StyledMS/Row';
import Img from './StyledMS/Img';
import HtImg from './defaultHotel.jpg';
import Title from '../../../components/ReserHotel/Title';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FontAwesome from 'react-fontawesome';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
const P = styled(H3) `
   width: 180px;
   margin-left: 10px;

`;

const PB = styled(H3) `
  color: #87b672;
  margin-left: 10px;
  top:-8px;
  position: relative;
`;


const FontA = styled(FontAwesome) `
    color: #87b672 !important;
    font-weight: 900 !important;
    top:-5px !important;
    position: relative !important;

`;

const FontB = styled(FontAwesome) `
    color: #87b672 !important;
    font-weight: 900 !important;
    top:-5px !important;
    position: relative !important;
    margin-left: 10px !important;

`;

function MostSold() {
  return (
    <Column>
    <Title Title="Lo Más vendido" />
    <Row>
        <P>Hotel Nayarit</P>
        <FontA name='angle-up' size="2x" />
      </Row>
      <Row>
        <StarRating />
        <FontB name='tripadvisor' size="lg" />
        <PB>3.0/5</PB>
      </Row>
      <PriceLabel Tam={"Com"} Since={"3,089.56"} Currency={"USD"} Total={"1,200.56"} />
      <Img src={HtImg} Width={"200px"} />
    </Column>
  );
}

MostSold.propTypes = {

};

export default MostSold;
