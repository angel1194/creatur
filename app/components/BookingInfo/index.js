/**
*
* BookingInfo
*
*/

import React from 'react';
import styled from 'styled-components';
import H3 from '../ReserHotel/H3'

const ContainerBookingHotel=styled.div`
  width:35%;
  background-color:#FAFAFA;
  height:auto;
  padding: 20px 10px 20px 30px;
`;

const Title=styled(H3)`
  margin-top:5px;
  margin-bottom:5px;
`;

const Subtitle=styled.label`
  color:#2E2E2E;
  margin-left:15px;
  margin-right:5px;
`;

const LabelBooking= styled.label`
  color:#5e5e5e;
`;

const ContainerCheck=styled.div`
  width:80%;
  margin-top:10px;
  display: flex;
  justify-content:space-between;
  flex-wrap:nowrap;
`;

function BookingInfo() {
  return (
    <ContainerBookingHotel>
      <Title>Detalles de la Estancia</Title>
      <Subtitle>Habitacion:</Subtitle>
      <LabelBooking>Individual Economica </LabelBooking>
      <br/>
      <Subtitle>Plan de Alimentos:</Subtitle>
      <LabelBooking>Todo incluido </LabelBooking>
      <br/>
      <Subtitle>Cama:</Subtitle>
      <LabelBooking>Doble </LabelBooking>
      <br/>
      <Subtitle>Zona:</Subtitle>
      <LabelBooking>Cerca del aeropuerto </LabelBooking>
      <ContainerCheck>
        <div>
          <Title>Check in:</Title>
          <LabelBooking>02:00pm</LabelBooking>
        </div>
        <div>
          <Title>Check out:</Title>
          <LabelBooking>12:00pm</LabelBooking>
        </div>
      </ContainerCheck>
      <Title>Informacion importante del hotel:</Title>
      <LabelBooking>Favor de no cobrar ningun importe por los servicios arriba detallados. La reservacion esta pagada y confirmada</LabelBooking>
    </ContainerBookingHotel>
  );
}

BookingInfo.propTypes = {

};

export default BookingInfo;
