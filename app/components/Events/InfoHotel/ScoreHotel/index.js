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
        <NameHotel>City Express Mérida</NameHotel>
      </DivButton>
      <StarRating NumStart={4.5} />
      <AddressLabel>
        Mérida, 
      </AddressLabel>
      <AddressLabel>
        Calle 45 No 332 Por calle 54 y calle 56 Col. Benito Juarez Norte Merida YUC
      </AddressLabel>
      <ContTrip>
        <TripAd />
        <LocationLabel Title="Mérida, a 1.9 km de: Centro de Convenciones Yucatán Siglo XXI"/>
      </ContTrip>
    </ContainerScore>
  );
}

export default ScoreHotel;
