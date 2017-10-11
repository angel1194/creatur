/**
*
* AddTicket
*
*/

import React, {Component} from 'react';
import styled from 'styled-components';
import FormTableAdmin from '../FormTableAdmin';
import RowTicket from '../RowTicket';
import firebase from '../../../containers/Events/Firebase';
import moment from 'moment';
import ReactConfirmAlert , { confirmAlert }from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import {InpuT,Container,Title,Button, ContainerTable, FormTicket} from '../AddHotels/styles';


class AddTicket extends Component{
  constructor(props){
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.delete = this.delete.bind(this)
    this.update = this.update.bind(this)
  }

  submitForm(event){
    event.preventDefault()

    const date = this.refs.date.value
    const Folio = this.refs.folio.value
    const Price = this.refs.price.value
    const Section = this.refs.section.value
    const Seating = this.refs.seating.value
    const Key = this.refs.id.value

    if(Key != ''){
      let ticket= {
        date:date,
        key:Folio,
        price:Price,
        section:Section,
        seating:Seating
      }
      firebase.database().ref().child('tickets').child(Folio).set(ticket)
      firebase.database().ref().child('tickets').child(Key).remove()

      this.refs.date.value=''
      this.refs.folio.value=''
      this.refs.price.value=''
      this.refs.section.value=''
      this.refs.id.value=''
      this.refs.seating.value=''

    }
    else{
    let key = moment().format('X')
    let ticket= {
      date:date,
      key:Folio,
      price:Price,
      section:Section,
      seating:Seating
    }
    firebase.database().ref().child('tickets').child(key).set(ticket)
    this.refs.date.value=''
    this.refs.folio.value=''
    this.refs.price.value=''
    this.refs.section.value=''
    this.refs.id.value=''
    this.refs.seating.value=''
  }
}

delete(key){
  let rootRef = firebase.database().ref()

  confirmAlert({
    title: 'Confirmación',
    message: '¿Estás seguro de eliminar el ticket?',
    confirmLabel: 'Confirmar',
    cancelLabel: 'Cancelar',
    onConfirm: () => rootRef.child('tickets').child(key).remove(),
    onCancel: () => '',
  })
}

update(key,dataTickets){
  this.refs.id.value=key
  this.refs.date.value=dataTickets.date
  this.refs.folio.value=dataTickets.key
  this.refs.price.value=dataTickets.price
  this.refs.section.value=dataTickets.section
  this.refs.seating.value=dataTickets.seating
}

  render(){
  return (
    <div>
    <div style={Container}>
      <span style={Title}>Ticket</span>
      <form style={FormTicket} onSubmit={this.submitForm}>
        <input type="text" name='key' ref='id'  hidden/>
        <label htmlFor='folio'>Folio:</label>
        <input style={InpuT} type='number' min='0' ref='folio' name='folio' id='folio' placeholder='Agregar folio' required/>
        <label htmlFor='date'>Fecha:</label>
        <input style={InpuT} type='date' name='date' ref='date' required/>
        <label htmlFor='asiento'>Asiento:</label>
        <input style={InpuT} name='asiento' ref='seating'  placeholder='Agregar asiento' required/><br/>

        <div className='formTransport'>
        <label htmlFor='price'>Precio:</label><br/>
        <input style={InpuT} name='price' ref='price' placeholder='Agregar precio' required/><br/>
        <label htmlFor='section'>Sección:</label><br/>
        <input style={InpuT} name='section' ref='section'  placeholder='Agregar sección' required/><br/>
        <div className='buttonAdmin'>
          <button style={Button} >AGREGAR</button>
        </div>
      </div>
    </form>
  </div>

    <div style={ContainerTable}>
       <FormTableAdmin
         row='Fecha'
         rowtwo='Key'
         rowthree='Precio'
         rowfour='Sección'
         rowFive='Asiento'
       />
       {Object.keys(this.props.Tickets).map((data,i)=>
         <RowTicket
           key={i}
           keyTicket={data}
           Tickets={this.props.Tickets[data]}
           delete={this.delete}
           update={this.update}
         />
       )}
    </div>
  </div>
  );
}
}

export default AddTicket;
