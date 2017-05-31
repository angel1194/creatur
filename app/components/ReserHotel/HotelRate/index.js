/**
*
* HotelRate
*
*/

import React from 'react';
import styled, { css, extend } from 'styled-components';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Title from '../../../components/ReserHotel/Title';
import { Column, Row, ConLabelPrice, SubTitle } from './StyledRate/StyledRate';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
import Line from '../../../components/ReserHotel/Line';
import SendQuotationHotel from '../../../components/ReserHotel/SendQuotationHotel';
import FontAwesome from 'react-fontawesome';
import logoTripAdvisor from './tripadvisor.png'

const LineC = styled(Line) `
    width : 90%;
    margin:auto;
`;

const PB = styled(H3) `
  color: #87b672;
  margin-left: 10px;
  position: relative;
`;

const FontB = styled(FontAwesome) `
    color: #87b672 !important;
    font-weight: 900 !important;
    position: relative !important;
    margin-left: 10px !important;
`;

const RowCenter = styled(Row) `
    align-items: center;
`;

const RowR = styled(Row) `
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`;

const ImgIcon = styled.img`
    width:23px; 
    height:14px;
    margin-left: 10px !important;

`;




function HotelRate() {
    return (
        <Column>
            <RowCenter>
                <Title Title="Hoteles a Cotizar" />

            </RowCenter>

            <ConLabelPrice>
                <RowCenter>
                    <SubTitle>Aberotel Montparnasse</SubTitle>
                    
                </RowCenter>

                <RowCenter>
                    <StarRating NumStart={3.0} />
                   <ImgIcon src={logoTripAdvisor} />
                    <PB>3.0/5</PB>
                </RowCenter>
                <RowCenter>
                    <LocationLabel Title="RUE BLOMET 24" />
                </RowCenter>
                <RowR>
                    <PriceLabel Since={678.12} Currency={"USD"} Total={2712.48} />
                </RowR>

            </ConLabelPrice>
            <LineC />
            <ConLabelPrice>
                <RowCenter>
                    <SubTitle>Hotel Acadia - Astotel</SubTitle>
                    <FontB name='chevron-down' size="2xw" />
                </RowCenter>

                <RowCenter>
                    <StarRating NumStart={3.0} />
                    <ImgIcon src={logoTripAdvisor} />
                    <PB>3.0/5</PB>
                </RowCenter>
            </ConLabelPrice>
            <LineC />
            <ConLabelPrice>
                <RowCenter>
                    <SendQuotationHotel Border={true}  />
                </RowCenter>

            </ConLabelPrice>


        </Column>
    );
}

HotelRate.propTypes = {

};

export default HotelRate;
