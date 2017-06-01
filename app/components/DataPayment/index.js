/**
*
* DataPayment
*
*/

import React from 'react';
import styled from 'styled-components';
import InputGuests from '../InputGuests';
import FontAwesome from 'react-fontawesome';
import GreenButton from '../GreenButton';
import AddCheckList from '../AddCheckList';
import Visa from './visa-mastercard.png'
import AExpress from './American_Express.png'

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
  margin-right: 20px;
`;

const Text = styled.label`
  color:#2b5bac;
  font-family:Montserrat;
  font-size:14px;
  margin-top:10px;
`;

const Code = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
`;

const Phone = styled.input`
  width:50px;
  border:1px solid #eaeff3;
  box-shadow:inset 1px 1px 2px #ccc;
  height:35px;
  padding-left:10px;
  border-radius: 6px 0px 0px 6px;
`;

const Icon = styled.div`
  border:1px solid #eaeff3;
  width:35px;
  color:white !important;
  font-size:18px;
  background-color:#7db464;
  height:35px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  margin-right: 20px;
  border-radius: 0px 6px 6px 0px;
`;

const Number = styled.input`
    width:46%;
    box-shadow:inset 1px 1px 2px #ccc;
    height:35px;
    border:1px solid #eaeff3;
    padding-left:10px;
    border-radius: 6px;
`;

const CoSeguridad = styled.input`
    width:11%;
    box-shadow:inset 1px 1px 2px #ccc;
    height:35px;
    border:1px solid #eaeff3;
    padding-left:10px;
    border-radius: 6px;
`;

const Pais = styled.input`
  width:110px;
  border:1px solid #eaeff3;
  box-shadow:inset 1px 1px 2px #ccc;
  height:35px;
  padding-left:10px;
  border-radius: 6px 0px 0px 6px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  margin-top: -10px;
`

const Div = styled.div`
  margin-bottom: -25px;
`
const Tel = styled.input`
  width:25%;
  box-shadow:inset 1px 1px 2px #ccc;
  height:35px;
  border:1px solid #eaeff3;
  padding-left:10px;
  margin-bottom: 10px;
  border-radius: 6px;
`;

const ButtonPosition=styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20PX;
  width:30% !important;
`;

const DivCheck = styled.div`

`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`
const Check = styled.div`
  margin: 10px 0px 0px 20px;
`
const Img = styled.img`
  width: 50px;
`
const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const I = styled.i`
  color: #A6A4A4;
`;

function DataPayment() {
  return (
    <Container>
      <Card>
        <Title>Informacion para el pago</Title>
        <Img src={Visa}/>
        <Img src={AExpress}/>
      </Card>
      <Text>Numero de tarjeta</Text>
      <Number/>
      <Text>codigo de seguridad <I className="fa fa-question-circle fa-lg" aria-hidden="true"></I></Text>
      <CoSeguridad/>
      <Text>Expiracion</Text>
      <Code>
        <Phone placeholder='Mes'/>
        <Icon>
          <FontAwesome name='caret-down'/>
        </Icon>
        <Phone placeholder='Anio'/>
        <Icon>
          <FontAwesome name='caret-down'/>
        </Icon>
      </Code>
      <Text>Nombre del titular de la tarjeta</Text>
      <Number/>
      <FlexRow>
        <div>
          <Text>Pais</Text>
          <Code>
            <Pais placeholder='Mexico'/>
            <Icon>
              <FontAwesome name='caret-down'/>
            </Icon>
          </Code>
        </div>
        <FlexColumn>
          <Text>C.P.</Text>
          <CoSeguridad/>
        </FlexColumn>
      </FlexRow>
      <Div>
        <InputGuests Titulo='Correo Electronico' SubTitle='Confirmar correo electronico' IdFirst='Firstm' IdSecond='Secondm'/>
      </Div>
      <Text>Telefono</Text>
      <Code>
        <Pais placeholder='Mexico +52'/>
        <Icon>
          <FontAwesome name='caret-down'/>
        </Icon>
        <Tel/>
        <Check><AddCheckList text="Celular" id="1"/></Check>
      </Code>
      <Row>
        <DivCheck>
          <AddCheckList text="Necesito un comprobante fiscal" id="2"/>
          <AddCheckList text="He leido y aceptado los Terminos y Condiciones de uso." id="3"/>
        </DivCheck>
        <ButtonPosition>
          <GreenButton text='PAGAR'/>
        </ButtonPosition>
      </Row>
    </Container>
  );
}

DataPayment.propTypes = {

};

export default DataPayment;
