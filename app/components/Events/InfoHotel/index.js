import React from 'react';
import ScoreHotel from './ScoreHotel'
import BookingInfo from './BookingInfo'
import {ContainerHotel, Img, Row} from './style'

function InfoHotel(props) {
  return (
    <ContainerHotel>
      <Row>
        <Img src="https://imgec.trivago.com/partnerimages/11/11/111168560_x.jpeg"/>
        <ScoreHotel/>
        <BookingInfo/>
      </Row>
    </ContainerHotel>
  );
}

InfoHotel.propTypes = {

};

export default InfoHotel;
