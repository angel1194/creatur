/**
*
* BillingPayment
*
*/

import React from 'react';
import styled from 'styled-components';
import InputGuests from '../InputGuests';
import GreenButton from '../GreenButton';

const Container =styled.div`
  width:100%;
  height:auto;
  margin-top:20px;
  padding:10px 40px 10px 25px;
  border:1px solid #eaeff3;
  display:flex;
  flex-direction:column;
`;

const Title = styled.label`
  font-family:Montserrat;
  font-size:18px;
  color:black;
`;

const Text = styled.label`
  color:#2b5bac;
  font-family:Montserrat;
  font-size:14px;
  margin-top:10px;
`;

const Direction = styled.input`
    width:96%;
    box-shadow:inset 1px 1px 2px #ccc;
    height:35px;
    margin-bottom:5px;
    border:1px solid #eaeff3;
    padding-left:10px;
`;

const Number = styled.input`
    width:46%;
    box-shadow:inset 1px 1px 2px #ccc;
    height:35px;
    border:1px solid #eaeff3;
    padding-left:10px;
`;

const ButtonPosition=styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 510px;
  width:30% !important;
`;

const Div = styled.div`
  margin-bottom: -25px;
`

function BillingPayment() {
  return (
    <Container>
      <Title>Informacion de facturacion</Title>
      <Text>Direccion</Text>
      <Direction/>
      <Div>
        <InputGuests Titulo='Ciudad' SubTitle='Estado / Provincia' IdFirst='Firstm' IdSecond='Secondm'/>
      </Div>
      <Text>Colonia / Fraccionamiento</Text>
      <Number/>
      <ButtonPosition>
        <GreenButton text='PAGAR'/>
      </ButtonPosition>
    </Container>
  );
}

BillingPayment.propTypes = {

};

export default BillingPayment;
