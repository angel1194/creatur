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
import { Column, Row } from './StyledRate/Column';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
import Line from '../../../components/ReserHotel/Line';
import FontAwesome from 'react-fontawesome';

const ColumnElement = styled(Column) `
    width:100%
    height: 285px;
    padding: 9px;
`;

const ContainerItems = styled(Column) `
    width:100%
    height: 100%;
    border:2px solid #eaeff3;

`;

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
    <Row>
            <Title Title="Hoteles a Cotizar" />
          </Row>
      <ColumnElement>
        <ContainerItems>
          

        </ContainerItems>
      </ColumnElement>
    </Column>
  );
}

HotelRate.propTypes = {

};

export default HotelRate;
