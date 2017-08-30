/**
*
* AddTicket
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
height: 65%;
`;

const Button = styled.button`
width:80px;
height:30px;
background-color:#2b5bac;
box-shadow:1px 1px 8px #000;
color:white;
`;

function AddTicket() {
  return (
    <Container>
      <Title>Ticket</Title>
      <Form>
        <label htmlFor='folio'>Folio:</label>
        <Input type='number' name='folio' id='folio' placeholder='Agregar folio'/>
        <label htmlFor='date'>Fecha:</label>
        <Input type='date' name='date' id='date'/>
      </Form>
      <Form>
        <label htmlFor='price'>Precio:</label>
        <Input name='price' id='price' placeholder='Agregar precio'/>
        <label htmlFor='section'>Sección:</label>
        <Input name='section' id='section' placeholder='Agregar sección'/>
        <div className='buttonAdmin'>
          <Button><p>AGREGAR</p></Button>
        </div>
      </Form>
    </Container>
  );
}

AddTicket.propTypes = {

};

export default AddTicket;
