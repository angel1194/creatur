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
  width:200px;
  height:30px;
  background:white;
  border-radius:5px;
  margin-left:10px;
  box-shadow:1px 1px 5px #000 inset;
`;


const Title = styled.span`
  width:100%;
  font-size:20px;
  height:0px;
  font-family:Montserrat;
  color:black;
`;

function AddHotels() {
  return (
    <Container>
      <Title>Hoteles</Title>
      <form>
        <label htmlFor='name'>Nombre:</label>
        <Input type='text' name='name' id='name' />
        <label htmlFor='address'>Direccion:</label>
        <Input name='address' id='address'/>
      </form>
    </Container>
  );
}


export default AddHotels;
