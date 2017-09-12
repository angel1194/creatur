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

const Container = styled.div`
  width:90%;
  height:400px;
  background:#E6E6E6;
  padding:25px;
  border-radius:6px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
`;

const Input = styled.input`
  width:300px;
  height:35px;
  background:white;
  border-radius:5px;
    margin-left:10px;
  margin-bottom: 10px;
  box-shadow:1px 1px 5px #000 inset;
  text-align:justify;
  padding: 10px;
`;


const Title = styled.span`
  width:100%;
  font-size:20px;
  height:0px;
  font-family:Montserrat;
  color:black;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width:100%;
  height: 65%;
  font-size: 16px;
`;

const Button = styled.input`
  width:80px;
  height:30px;
  background-color:#2b5bac;
  box-shadow:1px 1px 8px #000;
  color:white;
  margin-bottom: 20px;
  font-size: 12px
`;

const ContainerTable = styled.div`
  margin-top: 10px;
  width:90%;
  height: auto;
  background:#E6E6E6;
  padding:25px;
  border-radius:6px;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  padding-top: 19px;
  `;


class AddTicket extends Component{
  constructor(props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event){
    event.preventDefault()

     const date = event.target.elements['date'].value
     const Folio = event.target.elements['folio'].value
     const Price = event.target.elements['price'].value
     const Section = event.target.elements['section'].value


    let key = moment().format('X')
    let ticket= {
      date:date,
      key:Folio,
      price:Price,
      section:Section
    }
     firebase.database().ref().child('tickets').child(key).set(ticket)

     event.target.elements['date'].value=''
     event.target.elements['folio'].value=''
     event.target.elements['price'].value=''
     event.target.elements['section'].value=''

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

update(key){

console.log(key);
}

  render(){
  return (
    <div>
    <Container>
      <Title>Ticket</Title>
      <Form onSubmit={this.submitForm}>
        <label htmlFor='folio'>Folio:</label>
        <Input type='number' min='0' name='folio' id='folio' placeholder='Agregar folio' required/>
        <label htmlFor='date'>Fecha:</label>
        <Input type='date' name='date' id='date' required/>
        <div className='formTransport'>
        <label htmlFor='price'>Precio:</label><br/>
        <Input name='price' id='price' placeholder='Agregar precio' required/><br/>
        <label htmlFor='section'>Sección:</label><br/>
        <Input name='section' id='section' placeholder='Agregar sección' required/><br/>
        <div className='buttonAdmin'>
          <Button type='submit' value='AGREGAR'/>
        </div>
      </div>
    </Form>
    </Container>

    <ContainerTable>
       <FormTableAdmin
         row='Fecha'
         rowtwo='Key'
         rowthree='Precio'
         rowfour='Sección'
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
    </ContainerTable>
  </div>
  );
}
}

export default AddTicket;
