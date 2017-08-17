import React from 'react';
import styled from 'styled-components';
import H3 from '../../../ReserHotel/H3'
import StarRating from '../../../ReserHotel/StarRating'
import TripAdvisor from '../../../ReserHotel/TripAdvisor'
import LocationLabel from '../../../ReserHotel/LocationLabel'
import FontAwesome from 'react-fontawesome';
import {ContainerScore, AddressLabel, ContTrip, DivButton, ButtonBlue} from './style'

const NameHotel = styled(H3)`
  font-size:20px;
  font-family:roboto;
  font-weight:bold;
  margin-bottom:5px;
`;

const GreenAwesome=styled(FontAwesome)`
  margin-left:5px;
  color:#87b672 !important
  font-weight:bold;
  font-size:18px !important;
`;

const TripAd=styled(TripAdvisor)`
  margin-top:150px;
`;

function ScoreHotel(props) {
  return (
    <ContainerScore>
      <DivButton>
        <NameHotel>Best Western Maya Yucatán</NameHotel>
      </DivButton>
      <StarRating NumStart={4} />
      <AddressLabel>
        Mérida
      </AddressLabel>
      <br/>
      <AddressLabel>
        Calle 58 #483 por 55 Y 57 Centro Historico Merida YUC
      </AddressLabel>
      <ContTrip>
        <TripAd />
        <LocationLabel Title="Mérida"/>
      </ContTrip>
    </ContainerScore>
  );
}

export default ScoreHotel;
