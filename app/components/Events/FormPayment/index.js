import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import InputGuests from '../../InputGuests';
import {Container, Message, TextM, InputContainer,input} from './style';

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
        <InputGuests Titulo='Nombre (s)' IdFirst='Titular' IdSecond='LastTitular' SubTitle='Apellidos'/>
        <InputGuests Titulo='Telefono' IdFirst='Dos' IdSecond='LastDos' SubTitle='Correo Electronico'/>
        <div style={input.inputC}>
          <label style={input.label} htmlFor="">Nombre</label>
          <input style={input.inputMain} type="text" id=""/>
        </div>
      </InputContainer>
    </Container>
  );
}

export default FormPayment;
