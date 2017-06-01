/**
*
* RoomTitular
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import InputGuests from '../InputGuests'
const Container=styled.div`
  width:100%;
  display:flex;
  height:250px;
  flex-direction:column;
  flex-wrap:wrap;
`;

const Message=styled.div`
  width:100%;
  padding-left:20px;
  background-color:#F2F2F2;
  height:50px;
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#2b5bac;
  border-radius: 6px 6px 0px 0px;
`;

const TextM = styled.label`
  font-size:25px;
  font-family:Montserrat !important;
  font-weight:bold;
`;

const Icon = styled(FontAwesome) `
  margin-left:20px;
  font-size:35px !important;
`;

const InputContainer = styled.div`
  width:100%;
  height:200px;
  border: 1px solid #eaeff3;
  padding:25px 40px 0px 25px;
  display:flex;
  flex-direction:column;
  border-radius: 0px 0px 6px 6px;
`;

function RoomTitular() {
  return (
    <Container>
      <Message>
        <TextM>
          ¡Estás a un click de tener tu reserva!
        </TextM>
        <Icon name='check-circle'/>
      </Message>
      <InputContainer>
        <InputGuests Titulo='Titular Nombre (s)' IdFirst='Titular' IdSecond='LastTitular' SubTitle='Apellidos'/>
        <InputGuests Titulo='2do pasajero Nombre (s)' IdFirst='Dos' IdSecond='LastDos' SubTitle='Apellidos'/>
      </InputContainer>
    </Container>
  );
}

RoomTitular.propTypes = {

};

export default RoomTitular;
