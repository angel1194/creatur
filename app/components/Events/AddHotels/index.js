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

componentWillMount(){

}

delete(key){
  let rootRef = firebase.database().ref()

  confirmAlert({
    title: 'Confirmación',
    message: '¿Estás seguro de eliminar el hotel?',
    confirmLabel: 'Confirmar',
    cancelLabel: 'Cancelar',
    onConfirm: () => rootRef.child('hotels').child(key).remove(),
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

/// Antes de estar en la forma actual, agregaba todas las habitaciones en todas las noches
// let hotel={}
// let nightKey;
// let roomKey;
// let aryRooms = []
// Object.keys(this.props.Rooms).map( (roomsByNight)=>{
//   nightKey=roomsByNight
//   Object.keys(this.props.Rooms[roomsByNight]).map( (room)=>{
//   roomKey=room
//     if (data == this.props.Rooms[roomsByNight][room].idHotel) {
//       aryRooms.push(this.props.Rooms[roomsByNight][room])
//     }
//   })
// })
// hotel[data]=aryRooms
// return(
//   <RowAdmin
//   key={i}
//   keyHotel={data}
//   keyNight={nightKey}
//   keyRoom={roomKey}
//   Hotel={this.props.Hotels[data]}
//   Rooms={hotel}
//   delete={this.delete}
//   update={this.update}
//   />
// )
  render(){
    return (
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
            {Object.keys(this.props.Hotels).map((hotelKey,i) => {
              //Mapeando los hoteles
              let hotel={}
              hotel[hotelKey]={}
              //Mapeando las noches
              Object.keys(this.props.Rooms).map((nights)=>{
                hotel[hotelKey][nights]={}
                //Mapeando las habitaciones
                Object.keys(this.props.Rooms[nights]).map((room)=>{
                  if(hotelKey== this.props.Rooms[nights][room].idHotel){
                    hotel[hotelKey][nights][room]=this.props.Rooms[nights][room]
                  }
                })
              })
              return(
                <RowAdmin
                  key={i}
                  Hotel={this.props.Hotels[hotelKey]}
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
  }
}

export default AddHotels
