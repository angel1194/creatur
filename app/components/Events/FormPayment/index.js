import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Container, Message, TextM, InputContainer,styles} from './style';

const Icon = styled(FontAwesome) `
  margin-left:20px;
  font-size:35px !important;
`;

class FormPayment extends React.Component {
  constructor(){
    super();
    this.state = {}

    this.request = this.request.bind(this)
  }

  request(event){
    event.preventDefault()

    let holderName = this.refs.holder_name.value
    let lastName = this.refs.last_name.value
    let phoneNumber = this.refs.phone_number.value
    let email = this.refs.email.value
    let cardNumber = this.refs.card_number.value
    let Year = this.refs.expiration_year.value
    let Month = this.refs.expiration_month.value
    let cvv2 = this.refs.cvv2.value
    let city = this.refs.city.value
    let reference = this.refs.line3.value
    let postalCode = this.refs.postal_code.value
    let street = this.refs.line1.value
    let houseNumber = this.refs.line2.value
    let state = this.refs.state.value
    let countryCode = this.refs.country_code.value

    let token = {
      "card_number": cardNumber,
      "holder_name": holderName,
      "last_name": lastName,
      "phone_number": phoneNumber,
      "email": email,
      "expiration_year": Year,
      "expiration_month": Month,
      "cvv2": cvv2,
      "address":{
         "city": city,
         "line3": reference,
         "postal_code": postalCode,
         "line1": street,
         "line2": houseNumber,
         "state": state,
         "country_code": countryCode
      }
    }
    console.log(token);
  }

  render(){
    return (
      <Container>
        <Message>
          <TextM>
            ¡Estás a un click de tener tu reserva!
          </TextM>
          <Icon name='check-circle'/>
        </Message>
        <form style={styles.form} onSubmit={this.request}>
          <div style={styles.container}>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Nombre (s)</label>
              <input style={styles.input} type="text" id="" ref="holder_name"/>
            </div>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Apellidos</label>
              <input style={styles.input} type="text" id="" ref="last_name"/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Telefono</label>
              <input style={styles.input} type="text" id="" ref="phone_number"/>
            </div>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Correo Electronico</label>
              <input style={styles.input} type="email" id="" ref="email"/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Número de tarjeta:</label>
              <input style={styles.input} type="text" id="" ref="card_number"/>
            </div>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Año de vencimiento:</label>
              <input style={styles.input} type="text" id="" ref="expiration_year"/>
            </div>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Mes de expiración:</label>
              <input style={styles.input} type="text" id="" ref="expiration_month"/>
            </div>
            <div style={styles.inputSmall}>
              <label style={styles.label} htmlFor="">cvv2:</label>
              <input style={styles.input} type="text" id="" ref="cvv2"/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Calle:</label>
              <input style={styles.input} type="text" id="" ref="line1"/>
            </div>
            <div style={styles.inputSmall}>
              <label style={styles.label} htmlFor="">Numero:</label>
              <input style={styles.input} type="text" id="" ref="line2"/>
            </div>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Referencias:</label>
              <input style={styles.input} type="text" id="" ref="line3"/>
            </div>
            <div style={styles.inputSmall}>
              <label style={styles.label} htmlFor="">Código postal:</label>
              <input style={styles.input} type="text" id="" ref="postal_code"/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputBig}>
              <label style={styles.label} htmlFor="">Ciudad:</label>
              <input style={styles.input} type="text" id="" ref="city"/>
            </div>
            <div style={styles.inputBig}>
              <label style={styles.label} htmlFor="">Estado:</label>
              <input style={styles.input} type="text" id="" ref="state"/>
            </div>
            <div style={styles.inputSmall}>
              <label style={styles.label} htmlFor="">Código de país:</label>
              <input style={styles.input} type="text" id="" ref="country_code" defaultValue="MX"/>
            </div>
          </div>
          <button style={styles.button}>Pagar</button>
        </form>
      </Container>
    );
  }
}

export default FormPayment;
