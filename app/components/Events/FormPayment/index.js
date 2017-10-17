import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Container, Message, TextM, InputContainer, styles, Dates, Line} from './style';
import firebase from '../../../containers/Events/Firebase';
import moment from 'moment';

const Icon = styled(FontAwesome) `
  margin-left:20px;
  font-size:35px !important;
`;

class FormPayment extends React.Component {
  constructor(){
    super();
    this.state = {deviceSessionId: '', names: {}}

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
      alert('La validación de la tarjeta es incorrecta')
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
      'order_id': 'CMV-test'+(this.props.idSales + 1),
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
      if (recurso.error_code) {
        alert('Ha ocurrido un error, contacte con el proveedor')
      }else {
        request['sales'] = this.props.car
        request['contact_person'] = this.state.names,
        fetch('http://192.168.1.38:8000/email/',{
          method: 'post',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(request)
        })
        // ejecutando funciones de firebase
        this.setFirebase()
      }
    })
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

  setFirebase(){
    //Variables
    let idSale = moment().format('X')
    let car = this.props.car
    // generando order_id para el request
    firebase.database().ref().child('idSales').set(this.props.idSales + 1)
    //Agregando el pago exitoso a ventas en firebase
    firebase.database().ref().child('sales').child(idSale).set(car)
    //Condicion para eliminar el pago de hotel o transport en firebase
    if (this.props.ubicacion === 'hotel') {
      // Eliminar habitaciones reservadas en firebase
      firebase.database().ref().child('nightsHotels').child(car.room.night).child(car.room.keyRoom).child('used').set(Number(car.room.used) + Number(car.room.taken))
      // Eliminar los tickets reservados si el pago es exitoso
      if (car.tickets) {
        Object.keys(car.tickets).map((item,i)=>firebase.database().ref().child('temp').child(item).remove())
      }
    }else {
      // Ocupar Asientos reservados en firebase
      Object.keys(car.transport).map((item,i)=>firebase.database().ref().child('transport').child(item).child('used').set(Number(car.transport[item].used) + Number(car.transport[item].taken)))
      // Eliminar los tickets reservados si el pago es exitoso
      if (car.tickets) {
        Object.keys(car.tickets).map((item,i)=>firebase.database().ref().child('temp').child(item).remove())
      }
    }
    //recargar pagina al hacer el pago exitoso
    alert('Pago exitoso, la información de compra se envió a su correo electrónico')
    // location.reload()
  }


  validatePhone(val, tel){
    let type = tel
    let validatePhone = document.getElementById("validate_phone")
    let validateInput = document.querySelector("#validate_input")

    let validatePhoneTel = document.getElementById("validate_phoneTel")
    let validateInputTel = document.querySelector("#validate_inputTel")

    if (val.target.value.length > 10) {
      if (type === 'tel1') {
        validatePhone.innerHTML = 'Introduzca solo 10 digitos';
        validateInput.style.border = '1px solid #c0392b';
        return false;
      } else {
        validatePhoneTel.innerHTML = 'Introduzca solo 10 digitos';
        validateInputTel.style.border = '1px solid #c0392b';
        return false;
      }
    }else {
      if (type === 'tel1') {
        validatePhone.innerHTML = '';
        validateInput.style.border = '1px solid #eaeff3';
      } else {
        validatePhoneTel.innerHTML = '';
        validateInputTel.style.border = '1px solid #eaeff3';
      }
    }
  }

  validateCards(val){
    if (val.target.value.length > 16) {
       document.getElementById("validate_cards").innerHTML = 'Introduzca solo 16 digitos';
       document.querySelector("#validate_numberCards").style.border = '1px solid #c0392b';
       return false;
    }else {
      document.getElementById("validate_cards").innerHTML = '';
      document.querySelector("#validate_numberCards").style.border = '1px solid #eaeff3';
      return false;
    }
  }

  validatePostalCode(val){
    if (val.target.value.length > 5) {
       document.getElementById("validate_postalCode").innerHTML = 'Introduzca solo 5 digitos';
       document.querySelector("#postalCode").style.border = '1px solid #c0392b';
       return false;
    }else {
      document.getElementById("validate_postalCode").innerHTML = '';
      document.querySelector("#postalCode").style.border = '1px solid #eaeff3';
    }
  }

  getNames(val, id, item){
    let value = val.target.value
    let names = this.state.names
    names[id] = item
    names[id][id] = value

    this.setState({
      names: names
    })
  }

  render(){
    let roomsUI = this.props.roomsUI

    return (
      <Container>
        <form  onSubmit={this.request}>
          {this.props.ubicacion === 'hotel' ?
          <div>
            {Object.keys(roomsUI).map((item, i)=>
              <div style={styles.room} key={i}>
                <div style={styles.row}>
                  <Dates>Habitación {i+1}:</Dates>
                  <div style={styles.subtitle}>
                    <div>{roomsUI[item].adult} {roomsUI[item].adult >= 2 ? ' Adultos, ' : ' Adulto, '}</div>
                    {roomsUI[item].baby >= 1 ? <div>{roomsUI[item].baby} {roomsUI[item].baby >= 2 ? ' bebes' : ' bebe'},</div> : ''}
                    {Object.keys(roomsUI[item].child).length >= 1 ? <div>{Object.keys(roomsUI[item].child).length} {Object.keys(roomsUI[item].child).length >= 2 ? ' niños' : ' niño'}</div> : ''}
                  </div>
                </div>
                <div style={styles.containerInput}>
                  <div style={styles.inputlabel}>
                    <label style={styles.label} htmlFor={'name'+i+1}>Persona de contacto</label>
                    <input onChange={(e)=>this.getNames(e, 'name'+i, roomsUI[item])} id={'name'+i+1} style={styles.input} type="text" id="contacto" ref="holder_name" placeholder="Nombre(s) y Apellidos"  required/>
                  </div>
                  <div style={styles.inputlabel}>
                    {i === 0 ?
                      <div style={styles.inputlabel}>
                        <label style={styles.label} htmlFor={'tel'+i+1}>Número de teléfono celular</label>
                        <input
                          id={'tel'+i+1}
                          onChange={(e)=>this.validatePhone(e, 'tel1')}
                          style={styles.input}
                          pattern="[0-9]{10}" title="Introduzca solo 10 digitos"
                          type="tel"
                          id="validate_input"
                          ref="validate_Phone"
                          placeholder="Para que el hotel pueda comunicarse contigo"
                          required
                        />
                        <p id="validate_phone" style={styles.p}></p>
                      </div>
                      : ''}
                  </div>
                </div>
              </div>
            )}
          </div>
           : ''}

          <Message>
            <TextM>
              ¡Estás a un click de tener tu reserva!
            </TextM>
            <Icon name='check-circle'/>
          </Message>

          <div style={styles.container}>

            <Dates><FontAwesome name="credit-card-alt"/> Datos del titular de la tarjeta</Dates>
            <div style={styles.row}>
              <div style={styles.textSmall}>
                <FontAwesome name="check"/>Nuestro proceso de transmisión es seguro
              </div>
              <div style={styles.textSmall}>
                <FontAwesome name="check"/>Protegemos tu información personal
              </div>
            </div>

            <div style={styles.containerInput}>
              <div style={styles.inputlabel}>
                <label style={styles.label} htmlFor="">Nombre (s)</label>
                <input style={styles.input} type="text" id="" ref="holder_name" required/>
              </div>
              <div style={styles.inputlabel}>
                <label style={styles.label} htmlFor="">Apellidos</label>
                <input style={styles.input} type="text" id="" ref="last_name" required/>
              </div>
            </div>

            <div style={styles.containerInput}>
              <div style={styles.inputCard}>
                <label style={styles.label} htmlFor="">Número de tarjeta:</label>
                <input
                  onChange={(e)=>this.validateCards(e)}
                  style={styles.input}
                  type="tel"
                  id="validate_numberCards"
                  ref="card_number"
                  pattern="[0-9]{16}"
                  title="Introduzca solo 16 digitos"
                  required
                />
                <p id="validate_cards" style={styles.p}></p>
              </div>
            </div>

            <div style={styles.containerSelect}>
              <div style={styles.inputSelect}>
                <label style={styles.label} htmlFor="">Fecha de vencimiento</label>
              </div>
              <div style={styles.selects}>
                {/* <label style={styles.label} htmlFor="">Año de vencimiento:</label>
                <input style={styles.input} type="number" id="" ref="expiration_year" pattern="[0-9]{2}" title="La longitud del año de vencimiento debe ser 2 digitos de 01 a 99" required/> */}
                {/* <label style={styles.label} htmlFor="">Año de vencimiento:</label> */}
                <select style={styles.select} ref="expiration_year" id="year">
                  <option value="">Año</option>
                  <option value="17">2017</option>
                  <option value="18">2018</option>
                  <option value="19">2019</option>
                  <option value="20">2020</option>
                  <option value="21">2021</option>
                  <option value="22">2022</option>
                  <option value="23">2023</option>
                  <option value="24">2024</option>
                  <option value="25">2025</option>
                  <option value="26">2026</option>
                  <option value="27">2027</option>
                  <option value="28">2028</option>
                  <option value="29">2029</option>
                  <option value="30">2030</option>
                  <option value="31">2031</option>
                  <option value="32">2032</option>
                  <option value="33">2033</option>
                  <option value="34">2034</option>
                  <option value="35">2035</option>
                  <option value="36">2036</option>
                </select>

                <select style={styles.select} ref="expiration_month">
                  <option>Mes</option>
                  <option value="01">01 - ene.</option>
                  <option value="02">02 - feb.</option>
                  <option value="03">03 - mar.</option>
                  <option value="04">04 - abr.</option>
                  <option value="05">05 - may.</option>
                  <option value="06">06 - jun.</option>
                  <option value="07">07 - jul.</option>
                  <option value="08">08 - ago.</option>
                  <option value="09">09 - sep.</option>
                  <option value="10">10 - oct.</option>
                  <option value="11">11 - nov.</option>
                  <option value="12">12 - dic.</option>
                </select>
              </div>
              {/* <div style={styles.inputSmall}>
                <label style={styles.label} htmlFor="">Mes de expiración:</label>
                <input style={styles.input} type="number" id="" ref="expiration_month" pattern="[0-9]{2}" title="Los meses de expiraciones válidos son de 01 a 12" required/>
                <label style={styles.label} htmlFor="">Mes de expiración:</label>
              </div> */}
              <div style={styles.inputSelect}>
                <label style={styles.label} htmlFor="">Código de seguridad:</label>
                <input style={styles.input} type="number" id="" ref="cvv2" required/>
              </div>
            </div>

            <Line/>
            <Dates><FontAwesome name="address-card"/> Dirección del titular de la tarjeta</Dates>
            <div style={styles.containerInput}>
              <div style={styles.inputMedium}>
                <label style={styles.label} htmlFor="">Calle:</label>
                <input style={styles.input} type="text" id="" ref="line1"/>
              </div>
              <div style={styles.inputSmall}>
                <label style={styles.label} htmlFor="">Número:</label>
                <input style={styles.input} type="tel" id="" ref="line2"/>
              </div>
              <div style={styles.inputMedium}>
                <label style={styles.label} htmlFor="">Referencias:</label>
                <input style={styles.input} type="text" id="" ref="line3"/>
              </div>
              <div style={styles.inputSmall2}>
                <label style={styles.label} htmlFor="">Código postal:</label>
                <input
                  onChange={(e)=>this.validatePostalCode(e)}
                  style={styles.input}
                  type="tel"
                  id="postalCode"
                  ref="postal_code"
                  pattern="[0-9]{5}"
                  title="Introduzca solo 5 digitos"
                  required
                />
                <p id="validate_postalCode" style={styles.p}></p>
              </div>
            </div>

            <div style={styles.containerInput}>
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

            <div style={styles.contact}>
              <Dates><FontAwesome name="envelope"/> Datos de envio de confirmación</Dates>
              <div style={styles.row}>
                <div style={styles.inputlabel}>
                  <label style={styles.label} htmlFor="">Teléfono</label>
                  <input
                    onChange={(e)=>this.validatePhone(e, 'tel2')}
                    style={styles.input}
                    type="tel"
                    id="validate_inputTel"
                    ref="phone_number"
                    pattern="[0-9]{10}"
                    title="Introduzca solo 10 digitos"
                    required
                  />
                  <p id="validate_phoneTel" style={styles.p}></p>
                </div>
                <div style={styles.inputlabel}>
                  <label style={styles.label} htmlFor="">Correo Electrónico</label>
                  <input style={styles.input} type="email" id="" ref="email" required/>
                </div>
              </div>
            </div>

            <input hidden id="deviceIdHiddenFieldName"/><br/>
            <button style={styles.button}>Pagar</button>
          </div>
        </form>
      </Container>
    );
  }
}

export default FormPayment;
