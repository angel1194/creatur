import React from 'react'
import {Modal,ModalHeader,ModalTitle,ModalClose,ModalBody,ModalFooter} from 'react-modal-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { inputStyle, inputOccupancy, TextArea} from './styles'
import moment from 'moment';
import firebase from '../../../containers/Events/Firebase';
import ReactConfirmAlert , { confirmAlert }from 'react-confirm-alert';

const Body =styled(Modal)`
  .modal-content{
     width: 100%;
   }
`;

const Container = styled.div`
  .modal-dialog{
    width: 85%;
  }
  .modal-backdrop{
    z-index:10 !important
  }
`;

const Title = styled.span`
  width:100%;
  font-size:20px;
  height:0px;
  font-family:Montserrat;
  color:black;
`;



const ButtonIcon=styled(FontAwesome)`
  cursor:pointer;
`;

const InputContainer = styled.div`
  margin-bottom:20px;
  width:45%;
  display:flex;
  flex-direction:column;
  align-items:center
`;

const RoomForm= styled.form`
  display:flex
  flex-direction:row
  flex-wrap:wrap
  justify-content:space-between;
  margin-top:10px
  width:100%
  background-color:#E6E6E6;
  padding:20px;
  border-radius:6px;
`;


const ButtonAdd = styled.button`
  width:120px;
  height:30px;
  background-color:#2B5BAC;
  color:white;
  box-shadow:1px 2px 5px black;
  border-radius:5px;

  &.buttonClick:hover{
      background-color:#0A47AB;
  }
`;

const ContainerButton = styled.div`
  width:50%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:20px;
`;




class AddRooms extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      rooms:[]
    };
    this.hideModal=this.hideModal.bind(this)

  }

  addRoom(event){
    event.preventDefault()


    let roomKey = this.refs.roomKey.value
    let nightKey = this.refs.nightKey.value
    let addRoom = this.refs.addRoom.value
    let keyHotel = this.props.hotelKey
    let type = this.refs.type.value
    let image = this.refs.image.value
    let price = this.refs.price.value
    let occupancy = this.refs.occupancy.value
    let description = this.refs.description.value

    if (roomKey != '' &&  nightKey != '') {
      let room={
        description:description,
        idHotel:keyHotel,
        image:image,
        occupancy:occupancy,
        price:price,
        type:type
      }
      firebase.database().ref().child('nightsHotels').child(nightKey).child(roomKey).set(room)
    }else{
      // agregando la ultima hora del dia a la fecha seleccionada
      let nightHour = String(this.refs.night.value) + ' 23:59:59'
      let night = moment(nightHour).format('X')

      // guardando los valores en variables con ref

      // Creando el objeto que se guardara en firebase
      for (var i = 1; i <= addRoom; i++) {
        let momentDate = moment(new Date()).format('X')
        let keyRoom = String(Number(momentDate) + i)

        let room={
          description:description,
          idHotel:keyHotel,
          image:image,
          occupancy:occupancy,
          price:price,
          type:type
        }
        firebase.database().ref().child('nightsHotels').child(night).child(keyRoom).set(room)
      }
    }

    this.refs.roomKey.value = ''
    this.refs.type.value = ''
    this.refs.image.value = ''
    this.refs.price.value =''
    this.refs.occupancy.value = ''
    this.refs.description.value = ''
    this.refs.addRoom.value = 1
  }

  updateRoom(roomKey,room){
    this.refs.nightKey.value = room.night
    this.refs.roomKey.value = roomKey

    this.refs.type.value = room.type
    this.refs.image.value = room.image
    this.refs.price.value = room.price
    this.refs.occupancy.value = room.occupancy
    this.refs.description.value = room.description

  }

  deleteRoom(roomKey,object){
    let roomRef = firebase.database().ref().child('nightsHotels')
    confirmAlert({
      title: 'Confirmación',
      message: '¿Estás seguro de eliminar la habitacion?',
      confirmLabel: 'Confirmar',
      cancelLabel: 'Cancelar',
      onConfirm: () => roomRef.child(object.night).child(roomKey).remove(),
      onCancel: () => '',
    })
  }

  openModal(){
    this.setState({
      isOpen: true
    });
  };

  hideModal(){
    this.setState({
      isOpen: false
    });
  };

  render(){
    return(
      <div>
      <Container >
        <Body isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
          </ModalHeader>
          <ModalBody>
            <Title>{'Agregar habitacion a ' + this.props.hotelName}</Title>
            <RoomForm onSubmit={(e) => this.addRoom(e)}>
              <input type='text' ref='roomKey' hidden />
              <input type='text' ref='nightKey' hidden />
              <InputContainer>
                <label>Dia disponible:</label>
                <input name='night' id='night' ref='night' type='date' style={inputStyle}  />
              </InputContainer>
              <InputContainer>
                <label>Cantidad de habitacion a agregar:</label>
                <select name='addRoom' id='addRoom' ref='addRoom'  style={inputStyle} >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
              </InputContainer>
              <InputContainer>
                <label>Tipo de habitacion:</label>
                <input name='type' id='type' type='text' ref='type' style={inputStyle} placeholder='Standar, Doble, etc...' />
              </InputContainer>
              <InputContainer>
                <label>URL de la foto del hotel:</label>
                <input name='image' id='image' type='url' ref='image' style={inputStyle} placeholder='http://www.urlimagen.com' />
              </InputContainer>
              <InputContainer>
                <label>Precio de la habitacion por noche:</label>
                <input type='number' name='price' id='price' ref='price' style={inputOccupancy} placeholder='precio por noche'  min='1'/>
              </InputContainer>
              <InputContainer>
                <label>Ocupacion maxima:</label>
                <input type='number' name='occupancy' id='occupancy' ref='occupancy' style={inputOccupancy} placeholder='00'  min='1'/>
              </InputContainer>
              <InputContainer>
                <label htmlFor='description'>Descripción:</label>
                <textarea style={TextArea} name='description' id='description' ref='description'/>
              </InputContainer>
              <ContainerButton>
              <ButtonAdd className='buttonClick'>Agregar</ButtonAdd>
              </ContainerButton>
            </RoomForm>
            <Container>
              <table>
                <thead>
                  <tr className='thTable'>
                    <th className='thTable'>Imagen</th>
                    <th className='thTable'>Descripcion</th>
                    <th className='thTable'>Precio</th>
                    <th className='thTable'>Ocupacion</th>
                    <th className='thTable'>Tipo</th>
                    <th className='thTable'>Editar</th>
                    <th className='thTable'>Eliminar</th>
                  </tr>
                </thead>
              </table>
            </Container>
            <table>
              <tbody>
                {
                  Object.keys(this.props.rooms).map((roomKey,i)=>{
                    return(
                      <tr key={i}>
                        <td><img src={this.props.rooms[roomKey].image} alt='Habitacion' width='100'/></td>
                        <td>{this.props.rooms[roomKey].description}</td>
                        <td>{this.props.rooms[roomKey].price}</td>
                        <td>{this.props.rooms[roomKey].occupancy}</td>
                        <td>{this.props.rooms[roomKey].type}</td>
                        <td><ButtonIcon onClick={()=>this.updateRoom(roomKey,this.props.rooms[roomKey])} name='pencil-square'/></td>
                        <td><ButtonIcon onClick={()=>this.deleteRoom(roomKey,this.props.rooms[roomKey])} name='trash'/></td>
                      </tr>
                  )
                })
                }
              </tbody>
          </table>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={this.hideModal}>  Cerrar</button>
          </ModalFooter>
        </Body>
      </Container>
      <ButtonIcon name='plus-square-o' onClick={this.openModal.bind(this)}/>
    </div>
    )
  }
}

export default AddRooms
