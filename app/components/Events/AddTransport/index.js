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
import ReactConfirmAlert , { confirmAlert }from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import {InpuT,Container,Title,Button, ContainerTable, FormTicket} from '../AddHotels/styles';

class AddTransport extends Component{
  constructor (props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.delete=this.delete.bind(this)
    this.update=this.update.bind(this)
  }

  submitForm(event){
    event.preventDefault()
     const Key = this.refs.id.value
     const Image = this.refs.image.value
     const Price = this.refs.price.value
     const Seating = this.refs.seating.value
     const Type = this.refs.type.value

    if(Key !=''){
      let transport ={
        image:Image,
        price:Price,
        seating:Seating,
        type:Type
      }

      firebase.database().ref().child('transport').child(Key).set(transport)

      this.refs.image.value=''
      this.refs.price.value=''
      this.refs.seating.value=''
      this.refs.type.value=''
      this.refs.id.value=''
    }else{

      let key = moment().format('X')
      let transport= {
        image:Image,
        price:Price,
        seating:Seating,
        type:Type,
        used:0
     }
     firebase.database().ref().child('transport').child(key).set(transport)

     this.refs.image.value=''
     this.refs.price.value=''
     this.refs.seating.value=''
     this.refs.type.value=''
     this.refs.id.value=''
    }

}


delete(key){
  let rootRef = firebase.database().ref()

  confirmAlert({
    title: 'Confirmación',
    message: '¿Estás seguro de eliminar el transporte?',
    confirmLabel: 'Confirmar',
    cancelLabel: 'Cancelar',
    onConfirm: () => rootRef.child('transport').child(key).remove(),
    onCancel: () => '',
  })
}

update(key,dataTransport){

 this.refs.id.value=key
 this.refs.image.value=dataTransport.image
 this.refs.price.value=dataTransport.price
 this.refs.seating.value=dataTransport.seating
 this.refs.type.value=dataTransport.type

}
  render(){
  return (
    <div>
    <div style={Container}>
      <span style={Title}>Transporte</span>
      <form style={FormTicket} onSubmit={this.submitForm}>
        <input type="text" name='key' ref='id' hidden/>
        <label htmlFor='image'>Imagen:</label>
        <input style={InpuT} name='image' ref='image' placeholder='Agregar url' required/>
        <label htmlFor='price'>Precio:</label>
        <input style={InpuT}  name='price' ref='price' placeholder='Agregar precio' required/>
        <div className='formTransport'>
        <label htmlFor='seating'>Asiento:</label><br/>
        <input style={InpuT} type='number' min='0' name='seating' ref='seating' placeholder='Agregar asiento' required/><br/>
        <label htmlFor='type'>Tipo:</label><br/>
        <input style={InpuT} name='type' ref='type' placeholder='Agregar tipo' required/><br/>
        <div className='buttonAdmin'>
          <button style={Button}>AGREGAR </button>
        </div>
      </div>
    </form>
    </div>
    <div style={ContainerTable} >
       <FormTableAdmin
         row='Imagen'
         rowtwo='Precio'
         rowthree='Asiento'
         rowfour='Tipo'
       />
       {Object.keys(this.props.Transport).map((data,i)=>
        <RowTransport
         key={i}
         keyTransport={data}
         Transport={this.props.Transport[data]}
         delete={this.delete}
         update={this.update}
        />
       )}
    </div>
  </div>
  );
}
}

export default AddTransport;
