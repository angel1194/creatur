import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import InputGuests from '../../InputGuests';
import {Container, Message, TextM, InputContainer} from './style';

const Icon = styled(FontAwesome) `
  margin-left:20px;
  font-size:35px !important;
`;

function FormPayment() {
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

export default FormPayment;
