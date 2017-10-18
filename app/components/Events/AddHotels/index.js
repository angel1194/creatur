import React,{Component} from 'react';
import styled from 'styled-components';
import TableAdmin from '../TableAdmin';
import RowAdmin from '../RowAdmin';
import firebase from '../../../containers/Events/Firebase';
import moment from 'moment';
import ReactConfirmAlert , { confirmAlert }from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import {InpuT,Container,Title,Button,TextArea,Select, ContainerTable, Form} from './styles'


class AddHotels extends Component {
  constructor(props){
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.delete = this.delete.bind(this)
    this.update = this.update.bind(this)
    // this.toRender = this.toRender.bind(this)
}
  submitForm(event){

    event.preventDefault()
    const Name = this.refs.name.value
    const Image = this.refs.image.value
    const Address = this.refs.address.value
    const Stars = this.refs.stars.value
    const Description = this.refs.description.value
    const Cancellation= this.refs.cancellation.value
    const Key = this.refs.id.value
    if(Key != ''){
      let hotel= {
        address:Address,
        cancellation:Cancellation,
        description:Description,
        image:Image,
        name:Name,
        star:Number(Stars)
      }
      firebase.database().ref().child('hotels').child(Key).set(hotel)
      this.refs.name.value=''
      this.refs.address.value=''
      this.refs.image.value=''
      this.refs.stars.value=''
      this.refs.description.value=''
      this.refs.cancellation.value=''
      this.refs.id.value=''
    }
    else {
      let key = moment().format('X')
      let hotel= {
        address:Address,
        cancellation:Cancellation,
        description:Description,
        image:Image,
        name:Name,
        star:Number(Stars)
      }
      firebase.database().ref().child('hotels').child(key).set(hotel)
      this.refs.name.value=''
      this.refs.address.value=''
      this.refs.image.value=''
      this.refs.stars.value=''
      this.refs.description.value=''
      this.refs.cancellation.value=''
      this.refs.id.value=''
    }
}

deleteHotelAndRooms(keyHotel){
  let rootRef = firebase.database().ref()
  Object.keys(this.props.Rooms).map((night)=>{
    Object.keys(this.props.Rooms[night]).map((room)=>{
      if(keyHotel == this.props.Rooms[night][room].idHotel){
        rootRef.child('nightsHotels').child(night).child(room).remove()
      }
    })
  })
  rootRef.child('hotels').child(keyHotel).remove()
}


delete(key){
  confirmAlert({
    title: 'Confirmación',
    message: '¿Estás seguro de eliminar el hotel?',
    confirmLabel: 'Confirmar',
    cancelLabel: 'Cancelar',
    onConfirm: () => this.deleteHotelAndRooms(key),
    onCancel: () => '',
  })
}

update(key,dataHotel){
  this.refs.id.value=key
  this.refs.name.value=dataHotel.name
  this.refs.address.value=dataHotel.address
  this.refs.image.value=dataHotel.image
  this.refs.stars.value=dataHotel.star
  this.refs.description.value=dataHotel.description
  this.refs.cancellation.value=dataHotel.cancellation
}

toRender(){
  let rooms;
  if (this.props.Rooms) {
    rooms=Object.keys(this.props.Rooms)
  }else{
    rooms=[]
  }
  if (this.props.Hotels) {
    let hotels = Object.keys(this.props.Hotels).length ? Object.keys(this.props.Hotels) : []
      return(
        <div>
        <div style={Container}>
          <span style={Title}>Hoteles</span>
          <form style={Form} onSubmit={this.submitForm}>
            <input type="text" name='key' ref='id'  hidden/>
            <label htmlFor='name'> Nombre:</label>
            <input style={InpuT} type='text' name='name'  ref='name'   placeholder='Agregar nombre' required/>
            <label htmlFor='address'>Dirección:</label>
            <input style={InpuT} type='text' name='address'  ref='address' placeholder='Agregar dirección'  required/>
            <label htmlFor='image'>Imagen:</label>
            <input style={InpuT} type='url' name='image'  placeholder='Agregar url' ref='image' required/>
            <label htmlFor='star'>Estrellas:</label>
            <select style={Select} name="stars" ref='stars'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <div className='formTransport'>
              <label htmlFor='description'>Descripción:</label><br/>
              <textarea style={TextArea} type ='text' ref='description' name='description'  placeholder='Agregar descripción' required/><br/>
              <label htmlFor='cancellation'>Cancelación:</label><br/>
              <textarea style={TextArea} name='cancellation' ref='cancellation'  placeholder='Agregar cancelación'  required/>
              <div className='buttonAdmin'>
                <button style={Button}>AGREGAR</button>
              </div>
            </div>
          </form>

        </div>
        <div style={ContainerTable}>
          <TableAdmin />
          <table>
            {hotels.map((hotelKey,i) => {
              //Mapeando los hoteles
              let hotel={}
              //Mapeando las noches
              if (rooms.length>0) {
                rooms.map((nights)=>{
                  //Mapeando las habitaciones
                  Object.keys(this.props.Rooms[nights]).map((room)=>{
                    if(hotelKey== this.props.Rooms[nights][room].idHotel){
                      hotel[room]=this.props.Rooms[nights][room]
                      hotel[room]['night']=nights
                    }
                  })
                })
              }
              return(
                <RowAdmin
                  key={i}
                  Hotel={this.props.Hotels[hotelKey]}
                  hotelKey={hotelKey}
                  Rooms={hotel}
                  delete={this.delete}
                  update={this.update}
                />
              )
            })
          }
          </table>
        </div>
      </div>
    );
  } else{
    return(
      <div>
        <div style={Container}>
          <span style={Title}>Hoteles</span>
          <form style={Form} onSubmit={this.submitForm}>
            <input type="text" name='key' ref='id'  hidden/>
            <label htmlFor='name'> Nombre:</label>
            <input style={InpuT} type='text' name='name'  ref='name'   placeholder='Agregar nombre' required/>
            <label htmlFor='address'>Dirección:</label>
            <input style={InpuT} type='text' name='address'  ref='address' placeholder='Agregar dirección'  required/>
            <label htmlFor='image'>Imagen:</label>
            <input style={InpuT} type='url' name='image'  placeholder='Agregar url' ref='image' required/>
            <label htmlFor='star'>Estrellas:</label>
            <select style={Select} name="stars" ref='stars'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <div className='formTransport'>
              <label htmlFor='description'>Descripción:</label><br/>
              <textarea style={TextArea} type ='text' ref='description' name='description'  placeholder='Agregar descripción' required/><br/>
              <label htmlFor='cancellation'>Cancelación:</label><br/>
              <textarea style={TextArea} name='cancellation' ref='cancellation'  placeholder='Agregar cancelación'  required/>
              <div className='buttonAdmin'>
                <button style={Button}>AGREGAR</button>
              </div>
            </div>
          </form>
        </div>
        <div style={ContainerTable}>
          <TableAdmin />
        </div>
      </div>
    );
  }
}

  render(){
    return (
      <div>
        {this.toRender()}
      </div>
    );
  }
}

export default AddHotels
