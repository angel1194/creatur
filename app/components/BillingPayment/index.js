/**
*
* BillingPayment
*
*/

import React from 'react';
import styled from 'styled-components';
import InputGuests from '../InputGuests';
import GreenButton from '../GreenButton';
import AddCheckList from '../AddCheckList';

const Container =styled.div`
  width:100%;
  height:auto;
  margin-top:20px;
  padding:10px 40px 10px 25px;
  border:1px solid #eaeff3;
  display:flex;
  flex-direction:column;
  border-radius: 6px;
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
    border-radius: 6px;
`;

const Number = styled.input`
    width:46%;
    box-shadow:inset 1px 1px 2px #ccc;
    height:35px;
    border:1px solid #eaeff3;
    padding-left:10px;
    border-radius: 6px;
`;

const ButtonPosition=styled.div`
  display: flex;
  justify-content: flex-end;
  width:30% !important;
  margin-right: 20PX;
`;

const Div = styled.div`
  margin-bottom: -25px;
`
const DivCheck = styled.div`
  margin-top: 20px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      <Row>
        <DivCheck>
          <AddCheckList text="He leido y aceptado los Terminos y Condiciones de uso." id="condiciones"/>
        </DivCheck>
        <ButtonPosition>
          <GreenButton text='PAGAR'/>
        </ButtonPosition>
      </Row>
    </Container>
  );
}

BillingPayment.propTypes = {

};

export default BillingPayment;
