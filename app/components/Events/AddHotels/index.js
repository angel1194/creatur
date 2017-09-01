/**
*
* AddHotels
*
*/

import React from 'react';
import styled from 'styled-components';
import TableAdmin from '../TableAdmin';

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
  width:50%;
  margin-top: 20px;
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
const TextArea = styled.textarea`
  box-shadow:1px 1px 5px #000 inset;
  border-radius: 5px;
  width: 65%;
  background-color: #fff;
  margin-left:10px;
  height: 30%;
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
  flex-direction:row;
  flex-wrap:wrap;
`;

function AddHotels() {
  return (
    <div>
    <Container>
      <Title>Hoteles</Title>
      <Form>
        <label htmlFor='name'>Nombre:</label>
        <Input type='text' name='name' id='name' placeholder='Agregar nombre'/>
        <label htmlFor='address'>Dirección:</label>
        <Input name='address' id='address' placeholder='Agregar dirección'/>
        <label htmlFor='image'>Imagen:</label>
        <Input type='url' name='image' id='image' placeholder='Agregar url'/>
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
        <label htmlFor='description'>Descripción:</label>
        <TextArea  type ='text' name='description' id='description' placeholder='Agregar descripción'/><br/>
        <label htmlFor='cancelation'>Cancelación:</label>
        <TextArea name='cancelation' id='cancelation' placeholder='Agregar cancelación'/>
        <div className='buttonAdmin'>
          <Button type='submit' value='AGREGAR'/>
        </div>
      </Form>
    </Container>

     <ContainerTable>
       <TableAdmin />
     </ContainerTable>
  </div>







  );
}

export default AddHotels;
