import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Container, Message, TextM, InputContainer,styles} from './style';
import firebase from '../../../containers/Events/Firebase';
import moment from 'moment';

const Icon = styled(FontAwesome) `
  margin-left:20px;
  font-size:35px !important;
`;

class FormPayment extends React.Component {
  constructor(){
    super();
    this.state = {deviceSessionId: ''}

    this.request = this.request.bind(this)
    this.validateCard = this.validateCard.bind(this)
    this.validateExpiry = this.validateExpiry.bind(this)
  }

  componentDidMount(){
    const openpay = window.OpenPay
    const deviceSessionId = openpay.deviceData.setup('payment', 'deviceIdHiddenFieldName')
    this.setState({
      deviceSessionId:deviceSessionId
    })
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

    let validateCard = this.validateCard(cvv2, cardNumber)
    let validateExpiry = this.validateExpiry(Month,Year)

    if (validateCard === false || validateExpiry === false) {
      alert('La Validacion de tarjeta es incorrecta')
    }

    const openpay = window.OpenPay
    openpay.setId('mxvvjiqmnh5lhpdhogvo');
    openpay.setApiKey('pk_c8b8d91ff30d4bf18ab84a39a063549a');
    openpay.setSandboxMode(true);

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
    openpay.token.create(token, (e)=>this.onSuccess(e, token),(err)=>this.onError(err, token));
    console.log(token);
  }

  onSuccess(e, token){
    const state = this.state

    let request = {
      'source_id': e.data.id,
      'method': 'card',
      'amount': this.props.total,
      'currency': 'MXN',
      'description': 'Cargo inicial a mi cuenta',
      'order_id': 'CMV-'+(this.props.idSales + 1),
      'device_session_id' : state.deviceSessionId,
      'customer': {
        'name': token.holder_name,
        'last_name': token.last_name,
        'phone_number': token.phone_number,
        'email': token.email
      }
    }
    fetch('http://192.168.1.38:1337/payment',{
      method: 'post',
      body: JSON.stringify(request)
    })
    .then((response) => {
      return response.json();
    })
    .then((recurso) => {
      console.log(recurso);
      //recargar pagina al hacer el pago exitoso
      location.reload()
      //Variables
      let idSale = moment().format('X')
      let car = this.props.car
      let transport = this.props.car.transport
      // generando order_id para el request
      firebase.database().ref().child('idSales').set(this.props.idSales + 1)
      //Agregando el pago exitoso a ventas en firebase
      firebase.database().ref().child('sales').child(idSale).set(car)
      // Eliminar los tickets reservados si el pago es exitoso
      firebase.database().ref().child('temp').remove()
      //Condicion para eliminar el pago de hotel o transport en firebase
      if (this.props.ubicacion === 'hotel') {
        // Eliminar habitaciones reservadas en firebase
        firebase.database().ref().child('nightsHotels').child(car.room.night).child(car.room.keyRoom).child('used').set(car.room.used + car.room.taken)
      }else {
        // Ocupar Asientos reservados en firebase
        Object.keys(transport).map((item,i)=>firebase.database().ref().child('transport').child(item).child('used').set(transport[item].used + transport[item].taken))
      }
    })
    console.log(request);
  }

  onError(err, token){
    let message = err.data.description
    let response = message.replace(message, 'Error de solicitud: '+message)
    alert(response)
  }

  validateCard(cvv2, cardNumber){
    const openpay = window.OpenPay
    let validation = openpay.card.validateCVC(cvv2,cardNumber);

    return validation
  }

  validateExpiry(Month, Year){
    const openpay = window.OpenPay
    let validation = openpay.card.validateExpiry(Month, "20"+Year);

    return validation
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
              <input style={styles.input} type="text" id="" ref="holder_name" required/>
              <p style={styles.message} id="name"></p>
            </div>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Apellidos</label>
              <input style={styles.input} type="text" id="" ref="last_name" required/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Telefono</label>
              <input style={styles.input} type="tel" id="" ref="phone_number" pattern="[0-9]{10}" title="Introdusca solo 10 digitos" required/>
            </div>
            <div style={styles.inputlabel}>
              <label style={styles.label} htmlFor="">Correo Electronico</label>
              <input style={styles.input} type="email" id="" ref="email" required/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Número de tarjeta:</label>
              <input style={styles.input} type="text" id="" ref="card_number" required/>
            </div>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Año de vencimiento:</label>
              <input style={styles.input} type="text" id="" ref="expiration_year" pattern="[0-9]{2}" title="La longitud del año de vencimiento debe ser 2 digitos de 01 a 99" required/>
            </div>
            <div style={styles.inputMedium}>
              <label style={styles.label} htmlFor="">Mes de expiración:</label>
              <input style={styles.input} type="text" id="" ref="expiration_month" pattern="[0-9]{2}" title="Los meses de expiraciones válidos son de 01 a 12" required/>
            </div>
            <div style={styles.inputSmall}>
              <label style={styles.label} htmlFor="">cvv2:</label>
              <input style={styles.input} type="text" id="" ref="cvv2" required/>
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
              <input style={styles.input} type="text" id="" ref="postal_code" required/>
            </div>
          </div>

          <div style={styles.container}>
            <div style={styles.inputBig}>
              <label style={styles.label} htmlFor="">Ciudad:</label>
              <input style={styles.input} type="text" id="" ref="city" required/>
            </div>
            <div style={styles.inputBig}>
              <label style={styles.label} htmlFor="">Estado:</label>
              <input style={styles.input} type="text" id="" ref="state" required/>
            </div>
            <div style={styles.inputSmall}>
              <label style={styles.label} htmlFor="">Código de país:</label>
              <input style={styles.input} type="text" id="" ref="country_code" value="MX" readOnly/>
            </div>
          </div>
          <input hidden id="deviceIdHiddenFieldName"/><br/>
          <button style={styles.button}>Pagar</button>
        </form>
      </Container>
    );
  }
}

export default FormPayment;
