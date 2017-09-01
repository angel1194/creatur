import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import InputGuests from '../../InputGuests';
import {Container, Message, TextM, InputContainer,styles} from './style';

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
      <form style={styles.form}>
        <div style={styles.container}>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Nombre (s)</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Apellidos</label>
            <input style={styles.input} type="text" id=""/>
          </div>
        </div>

        <div style={styles.container}>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Telefono</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Correo Electronico</label>
            <input style={styles.input} type="text" id=""/>
          </div>
        </div>

        <div style={styles.container}>
          <div style={styles.target}>
            <label style={styles.label} htmlFor="">Número de tarjeta:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.target}>
            <label style={styles.label} htmlFor="">Año de vencimiento:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.target}>
            <label style={styles.label} htmlFor="">Mes de expiración:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.target}>
            <label style={styles.label} htmlFor="">cvv2:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
        </div>

        <div style={styles.container}>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Calle:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Numero:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Referencias:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Código postal:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
        </div>

        <div style={styles.container}>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Ciudad:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Estado:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
          <div style={styles.inputlabel}>
            <label style={styles.label} htmlFor="">Código de país:</label>
            <input style={styles.input} type="text" id=""/>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default FormPayment;
