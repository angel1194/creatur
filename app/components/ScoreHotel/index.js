/**
*
* ScoreHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import H3 from '../ReserHotel/H3'
import StarRating from '../ReserHotel/StarRating'
import TripAdvisor from '../ReserHotel/TripAdvisor'
import LocationLabel from '../ReserHotel/LocationLabel'
import FontAwesome from 'react-fontawesome';

const ContainerScore = styled.div`
  width:65%;
  background-color:#FFF;
  height:245px;
  padding: 10px 10px 10px 20px;
  border-bottom:1px solid #eaeaea;
`;

const NameHotel = styled(H3)`
  font-size:20px;
  font-family:roboto;
  font-weight:bold;
  margin-bottom:5px;
`;

const AddressLabel=styled.label`
  margin-top:-20px;
  color:#5e5e5e;
`;

const TripAd=styled(TripAdvisor)`
  margin-top:150px;
`;

const ContTrip=styled.div`
  margin-top:50px;
`;

const Details = styled.div`
  display:flex;
  width:100%;
  height:20px;
  justify-content:flex-end;
`;
const GreenAwesome=styled(FontAwesome)`
  margin-left:5px;
  color:#87b672 !important
  font-weight:bold;
  font-size:18px !important;
`;

function ScoreHotel() {
  return (
    <ContainerScore>
      <NameHotel>Jumeirah Vittaveli</NameHotel>
      <StarRating/>
      <AddressLabel>
        Maldivas
      </AddressLabel>
      <br/>
      <AddressLabel>
        South Male Atoll, 20229 Male, Asian Boulevard
      </AddressLabel>
      <ContTrip>
        <TripAd/>
        <LocationLabel/>
      </ContTrip>
      <Details>
        Detalles
        <GreenAwesome name='chevron-down'/>
      </Details>
    </ContainerScore>
  );
}

ScoreHotel.propTypes = {

};

export default ScoreHotel;
