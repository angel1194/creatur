/**
*
* AddTransport
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


function AddTransport() {
  return (
    <Container>
      <Title>Transporte</Title>
      <Form>
        <label htmlFor='image'>Imagen:</label>
        <Input name='image' id='image'/>
        <label htmlFor='price'>Precio:</label>
        <Input name='price' id='price'/>
        <label htmlFor='seating'>Asiento:</label>
        <Input name='seating' id='seating'/>
        <label htmlFor='type'>Tipo:</label>
        <Input name='type' id='type'/>
      </Form>
       <div className='buttonAdmin'>
         <Button>AGREGAR</Button>
       </div>

    </Container>
  );
}

AddTransport.propTypes = {

};

export default AddTransport;
