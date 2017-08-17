import React from 'react';
import ScoreHotel from './ScoreHotel'
import BookingInfo from './BookingInfo'
import {ContainerHotel, Img, Row} from './style'

function InfoHotel(props) {
  return (
    <ContainerHotel>
      <Row>
        <Img src="http://cdn.precioyviajes.com/00/13/40/00134083_gp.jpg"/>
        <ScoreHotel/>
        <BookingInfo/>
      </Row>
    </ContainerHotel>
  );
}

InfoHotel.propTypes = {

};

export default InfoHotel;
