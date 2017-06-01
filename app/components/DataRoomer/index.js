/**
*
* DataRoomer
*
*/

import React from 'react';
import styled from 'styled-components';
import InputGuests from '../InputGuests';
import FontAwesome from 'react-fontawesome';
import AddButton from '../AddButton';
import GreenButton from '../GreenButton';
import AddCheckList from '../AddCheckList'

const Container =styled.div`
  width:100%;
  height:350px;
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

const DivPhone=styled.div`
  width:100%;
  height:80px;
  margin-top:10px;
  display:flex;
  flex-direction:column;
`;

const Code = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  width:100%;
  height:35px;


`;

const Phone = styled.input`
  width:90px;
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
  background-color:#87b672;
  height:35px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border-radius: 0px 6px 6px 0px;
`;

const Number = styled.input`
    width:245px;
    box-shadow:inset 1px 1px 2px #ccc;
    height:35px;
    margin-left:5px;
    border:1px solid #eaeff3;
    padding-left:10px;
    border-radius: 6px;
`;

const NewAddButton = styled.div`
    margin-left:20px !important;
    margin-top:10px !important;
`;

const SecondAdd=styled.div`
  margin-top:-15px;
  margin-left:20px !important;
`;

const DivButton=styled.div`
  width:96%;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  margin-top:10px;
`;

const ButtonPosition=styled.div`
  width:30% !important;
`;

const Cel = styled.div`
  padding: 10px 10px 10px 20px;
`;


function DataRoomer() {
  return (
    <Container>
      <Title>Datos de envio de confirmacion</Title>
      <Text>Telefono</Text>
      <DivPhone>
        <Code>
          <Phone placeholder='Mexico +52'/>
          <Icon>
            <FontAwesome name='caret-down'/>
          </Icon>
          <Number/>
          <Cel><AddCheckList text="Celular" id="cel" /></Cel>
        </Code>
        <NewAddButton>
          <AddButton text='Anadir otro numero telefonico'/>
        </NewAddButton>
      </DivPhone>
      <InputGuests Titulo='Correo Electronico' SubTitle='Confirmar correo electronico' IdFirst='Firstm' IdSecond='Secondm'/>
      <SecondAdd>
        <AddButton text='Anadir otro correo electronico'/>
      </SecondAdd>
      <DivButton>
        <ButtonPosition>
          <GreenButton text='ENVIAR'/>
        </ButtonPosition>
      </DivButton>
    </Container>
  );
}

DataRoomer.propTypes = {

};

export default DataRoomer;
