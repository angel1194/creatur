import React from 'react'
import {Modal,ModalHeader,ModalTitle,ModalClose,ModalBody,ModalFooter} from 'react-modal-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { inputStyle, inputOccupancy} from './styles'

const Body =styled(Modal)`
  .modal-content{
     width: 100%;
   }
`;

const Container = styled.div`
  .modal-backdrop {
    display:flex;
    justify-content:center;
    width: 100%;
  }

  .modal-dialog{
    display:flex;
    justify-content:center;
    width: 85%;
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

const TextArea = styled.textarea`
  box-shadow:1px 1px 5px #000 inset;
  border-radius: 5px;
  width: 300px;
  background-color: #fff;
  margin-left:10px;
  height: 90px;
  text-align:justify;
  padding: 10px;
  padding-top: 10px;
`;

const Label= styled.label`

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
            <ModalTitle>`Agregar Hotel a {this.props.hotelName}`</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Title>{'Agregar habitacion a ' + this.props.hotelData.name}</Title>
            <RoomForm>
              <InputContainer>
                <label>Dia disponible:</label>
                <input name='night' id='night' ref='night' type='date' style={inputStyle}  required/>
              </InputContainer>
              <InputContainer>
                <label>Cantidad de habitacion a agregar:</label>
                <select name='night' id='night' ref='night' type='date' style={inputStyle} required>
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
                <input name='type' id='type' type='url' ref='type' style={inputStyle} placeholder='Standar, Doble, etc...' required/>
              </InputContainer>
              <InputContainer>
                <label>URL de la foto del hotel:</label>
                <input name='image' id='image' type='url' ref='image' style={inputStyle} placeholder='http://www.urlimagen.com' required/>
              </InputContainer>
              <InputContainer>
                <label>Precio de la habitacion por noche:</label>
                <input type='number' name='price' id='price' ref='price' style={inputOccupancy} placeholder='precio por noche' required min='1'/>
              </InputContainer>
              <InputContainer>
                <label>Ocupacion maxima:</label>
                <input type='number' name='occupancy' id='occupancy' ref='occupancy' style={inputOccupancy} placeholder='00' required min='1'/>
              </InputContainer>
              <InputContainer>
                <label htmlFor='description'>Descripción:</label><br/>
                <TextArea  type ='text' name='description' id='description' placeholder='Agregar descripción' ref='description' required/><br/>
              </InputContainer>
            </RoomForm>
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
