/**
*
* AddHotels
*
*/

import React,{Component} from 'react';
import styled from 'styled-components';
import TableAdmin from '../TableAdmin';
import RowAdmin from '../RowAdmin';
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
  width: 100%;
  height: 70%;
  font-size: 16px;
`;

const Button = styled.button`
  width:auto;
  height:40px;
  background-color:#2b5bac;
  box-shadow:1px 1px 8px #000;
  color:white;
  margin-bottom: 20px;
  font-size: 12px
`;
const TextArea = styled.textarea`
  box-shadow:1px 1px 5px #000 inset;
  border-radius: 5px;
  width: 65%;
  background-color: #fff;
  margin-left:10px;
  height: 90px;
  text-align:justify;
  padding: 10px;
  padding-top: 10px;
  resize: none;
`;

const Select = styled.select`
  margin-left: 10px;
  width:20%;
  box-shadow:1px 1px 4px #000 inset;
  border-radius: 5px;
  background-color: #fff ;
  text-align:center;
  padding-bottom: 3px;
  padding-top: 3px;
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

class AddHotels extends Component {
  constructor(props){
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.delete = this.delete.bind(this)
  }


  submitForm(event){
    event.preventDefault()

    const Name = event.target.elements['name'].value
    const Image = event.target.elements['image'].value
    const Address = event.target.elements['address'].value
    const Stars = event.target.elements['stars'].value
    const Description = event.target.elements['description'].value
    const Cancellation= event.target.elements['cancellation'].value

    let key = moment().format('X')
    let hotel= {
      address:Address,
      cancellation:Cancellation,
      description:Description,
      image:Image,
      name:Name,
      star:Stars
    }
    firebase.database().ref().child('hotels').child(key).set(hotel)

    event.target.elements['name'].value=''
    event.target.elements['image'].value=''
    event.target.elements['address'].value=''
    event.target.elements['stars'].value=''
    event.target.elements['description'].value=''
    event.target.elements['cancellation'].value=''
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

  render(){
    return (
      <div>
        <Container>
          <Title>Hoteles</Title>
          <Form onSubmit={this.submitForm}>
            <label htmlFor='name'>Nombre:</label>
            <Input type='text' name='name' id='name' ref='name' placeholder='Agregar nombre' required/>
            <label htmlFor='address'>Dirección:</label>
            <Input name='address' id='address' placeholder='Agregar dirección' ref='address' required/>
            <label htmlFor='image'>Imagen:</label>
            <Input type='url' name='image' id='image' placeholder='Agregar url' ref='image' required/>
            <label htmlFor='star'>Estrellas:</label>
            <Select name="stars" ref='stars'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Select>
            <div className='formTransport'>
              <label htmlFor='description'>Descripción:</label><br/>
              <TextArea  type ='text' name='description' id='description' placeholder='Agregar descripción' ref='description' required/><br/>
              <label htmlFor='cancellation'>Cancelación:</label><br/>
              <TextArea name='cancellation' id='cancellation' placeholder='Agregar cancelación' ref='cancellation' required/>
              <div className='buttonAdmin'>
                <Button>AGREGAR</Button>
              </div>
            </div>
          </Form>
        </Container>
        <ContainerTable>
          <TableAdmin />
          <table>
            {Object.keys(this.props.Hotels).map( (data,i) =>
              <RowAdmin
                key={i}
                keyHotel={data}
                Hotel={this.props.Hotels}
                delete={this.delete}
              />
            )
          }
          </table>
        </ContainerTable>
      </div>

    );
  }
}

export default AddHotels;
