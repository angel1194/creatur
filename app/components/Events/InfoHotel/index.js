import React from 'react';
import ScoreHotel from './ScoreHotel'
import BookingInfo from './BookingInfo'
import {ContainerHotel, Img, Row} from './style'

function InfoHotel(props) {
  return (
    <ContainerHotel>
      <Row>
        <Img src={props.elements.image}/>
        <ScoreHotel elements={props.elements}/>
        {/* <BookingInfo/> */}
      </Row>

    </ContainerHotel>
  );
}

InfoHotel.propTypes = {

};

export default InfoHotel;
