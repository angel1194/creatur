/**
*
* AddHotels
*
*/

import React from 'react';
import styled from 'styled-components';

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
  height:30px;
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
    width:50%;
`;

const Button = styled.button`
background-color: #7db464;
color: white;
border-radius: 5px;
height: 50px;
`;

const TextArea = styled.textarea`
     box-shadow:1px 1px 5px #000 inset;
     border-radius: 5px;
     width: 60%;
     background-color: #fff;
     margin-left:10px;
     height: 36%;
     text-align:justify;
     padding: 10px;
     padding-top: 10px;
`;

const Select = styled.select`
  margin-left: 10px;
  width:20%;
  box-shadow:1px 1px 4px #000 inset;
  border-radius: 5px;
  background-color: #fff
  text-align:center;
  padding-bottom: 3px;
  padding-top: 3px;
`;
function AddHotels() {
  return (
    <Container>
      <Title>Hoteles</Title>

      <Form>
        <label htmlFor='name'>Nombre:</label>
        <Input type='text' name='name' id='name' placeholder='add name'/>
        <label htmlFor='address'>Direccion:</label>
        <Input name='address' id='address' placeholder='add address'/>
        <label htmlFor='image'>Imagen:</label>
        <Input name='image' id='image' placeholder='add url'/>
        <label htmlFor='star'>Estrellas:</label>
        <Select name="stars">
          <option value="uno">1</option>
          <option value="dos">2</option>
          <option value="tres">3</option>
          <option value="cuatro">4</option>
          <option value="cinco">5</option>
          <option value="seis">6</option>
        </Select>
      </Form>
      <Form>
        <label htmlFor='description'>Descripcion:</label>
        <TextArea  type ='text' name='description' id='description' placeholder='Add description'/>
        <label htmlFor='cancelattion'>Cancelacion:</label>
        <TextArea name='cancelattion' id='cancelattion' placeholder='Add description'/>
      </Form>
       <div className='buttonAdmin'>
         <Button>AGREGAR</Button>
       </div>

    </Container>
  );
}


export default AddHotels;
