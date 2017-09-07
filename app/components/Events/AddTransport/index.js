/**
*
* AddTransport
*
*/

import React from 'react';
import styled from 'styled-components';
import FormTableAdmin from '../FormTableAdmin';
import RowTransport from '../RowTransport';

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


function AddTransport(props) {
  return (
    <div>
    <Container>
      <Title>Transporte</Title>
      <Form>
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
       {Object.keys(props.databaseTransport).map((data,i)=>
        <RowTransport
         key={i}
         Transport={props.databaseTransport[data]}
        />
       )}
    </ContainerTable>
  </div>
  );
}

export default AddTransport;
