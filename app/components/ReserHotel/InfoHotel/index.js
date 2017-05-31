/**
*
* InfoHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import SlideHotel from '../SlideHotel'
import ScoreHotel from '../../ScoreHotel'
import TermConditionsHotel from '../../TermConditionsHotel'
import BookingInfo from '../../BookingInfo'

const ContainerHotel = styled.div`
  width:98%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  border:1px solid #eaeaea;
  margin-bottom:20px;
`;

function InfoHotel(props) {
  return (
    <ContainerHotel>
      <SlideHotel/>
      <ScoreHotel reserve={props.reserve}/>
      <BookingInfo/>
      <TermConditionsHotel/>
    </ContainerHotel>
  );
}

InfoHotel.propTypes = {

};

export default InfoHotel;
