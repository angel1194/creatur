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
        <NameHotel>{props.elements.name}</NameHotel>
      </DivButton>
      <StarRating NumStart={Number(props.elements.star)} />
      {/* <AddressLabel>
        Mérida,
      </AddressLabel> */}
      <AddressLabel>
        {props.elements.description}
      </AddressLabel>
      <ContTrip>
        <TripAd />
        <LocationLabel Title={props.elements.address}/>
      </ContTrip>
    </ContainerScore>
  );
}

export default ScoreHotel;
