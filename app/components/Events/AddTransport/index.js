/**
*
* AddTransport
*
*/

import React, {Component} from 'react';
import styled from 'styled-components';
import FormTableAdmin from '../FormTableAdmin';
import RowTransport from '../RowTransport';
import firebase from '../../../containers/Events/Firebase';
import moment from 'moment';

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
    font-size: 12px;
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


class AddTransport extends Component{
  constructor (props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event){
    event.preventDefault()

     const Image = event.target.elements['image'].value
     const Price = event.target.elements['price'].value
     const Seating = event.target.elements['seating'].value
     const Type = event.target.elements['type'].value

     let key = moment().format('X')
     let transport= {
       image:Image,
       price:Price,
       seating:Seating,
       type:Type
    }
    firebase.database().ref().child('transport').child(key).set(transport)
}

delete(key){
  let rootRef = firebase.database().ref()
  const desertRef = rootRef.child('transport').child(key).remove()
}


  render(){
  return (
    <div>
    <Container>
      <Title>Transporte</Title>
      <Form onSubmit={this.submitForm}>
        <label htmlFor='image'>Imagen:</label>
        <Input name='image' id='image' placeholder='Agregar url'/>
        <label htmlFor='price'>Precio:</label>
        <Input name='price' id='price' placeholder='Agregar precio'/>
        <div className='formTransport'>
        <label htmlFor='seating'>Asiento:</label><br/>
        <Input type='number' min='0' name='seating' id='seating' placeholder='Agregar asiento'/><br/>
        <label htmlFor='type'>Tipo:</label><br/>
        <Input name='type' id='type' placeholder='Agregar tipo'/><br/>
        <div className='buttonAdmin'>
            <Button type='submit' value='AGREGAR'/>
        </div>
      </div>
      </Form>
    </Container>
    <ContainerTable>
       <FormTableAdmin
         row='Imagen'
         rowtwo='Precio'
         rowthree='Asiento'
         rowfour='Tipo'
       />
       {Object.keys(this.props.Transport).map((data,i)=>
        <RowTransport
         key={i}
         Transport={this.props.Transport[data]}
         keyTransport={data}
         delete={this.delete}
        />
       )}
    </ContainerTable>
  </div>
  );
}
}

export default AddTransport;
