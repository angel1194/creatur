/**
*
* InfoHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import SlideHotel from '../SlideHotel'
import ScoreHotel from '../../ScoreHotel'

const ContainerHotel = styled.div`
  width:98%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  border:1px solid #eaeaea;
`;

function InfoHotel() {
  return (
    <ContainerHotel>
      <SlideHotel/>
      <ScoreHotel/>
    </ContainerHotel>
  );
}

InfoHotel.propTypes = {

};

export default InfoHotel;
