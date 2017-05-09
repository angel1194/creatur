/**
*
* HotelRate
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Title from '../../../components/ReserHotel/Title';
import Column from './StyledRate/Column';
import Row from './StyledRate/Row';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
import Line from '../../../components/ReserHotel/Line';
import FontAwesome from 'react-fontawesome';

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

const FontC = styled(FontAwesome) `
    color: #87b672 !important;
    font-weight: 900 !important;
    top:8px !important;
    position: relative !important;
    margin-left: 10px !important;

`;

const LineN = styled(Line) `

    width:200px

`;


function HotelRate() {
  return (
    <Column>
      <Title Title="Hoteles a Cotizar" />
      <Row>
        <P>Hotel Nayarit</P>
        <FontA name='angle-up' size="2x" />
      </Row>

      <Row>
        <StarRating />
        <FontB name='tripadvisor' size="lg" />
        <PB>3.0/5</PB>
      </Row>
      <LocationLabel />

      <PriceLabel Tam={"Com"} Since={"3,089.56"} Currency={"USD"} Total={"1,200.56"} />
      <LineN />
      <Row>
        <P>Hotel Nayarit</P>
        <FontA name='angle-down' size="2x" />
      </Row>

      <Row>
        <StarRating />
        <FontB name='tripadvisor' size="lg" />
        <PB>3.0/5</PB>
      </Row>
      <LineN />
      <Row>
        <FontC name='envelope' size="lg" />
        <FontC name='print' size="lg" />
        <FontC name='download' size="lg" />
      </Row>
     
    </Column>
  );
}

HotelRate.propTypes = {

};

export default HotelRate;
