import React from 'react'
import {Modal,ModalHeader,ModalTitle,ModalClose,ModalBody,ModalFooter} from 'react-modal-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {formRoom} from './styles'

const Body =styled(Modal)`
  .modal-content{
     width: 100%;
     height:auto;
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


class AddRooms extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
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
            <Title>{'Agregar habitacion a ' + this.props.hotelName}</Title>
            <form style={formRoom}>
            </form>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={this.hideModal}>  Cerrar</button>
          </ModalFooter>
        </Body>
      </Container>
      <ButtonIcon name='pencil-square' onClick={this.openModal.bind(this)}/>
    </div>
    )
  }
}

export default AddRooms
