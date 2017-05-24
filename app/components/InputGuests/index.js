/**
*
* InputGuests
*
*/

import React,{ PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    height:80px;
`;

const InputC = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding-right:30px;
`;

const Label = styled.label`
  color:#2b5bac;
  font-family:Montserrat;
  font-size:14px;
  font-weight:400;
`;

const Input = styled.input`
  width:100%;
  box-shadow:inset 1px 1px 2px #ccc;
  height:35px;
  border:1px solid #eaeff3;
  padding-left:10px;
`;

function InputGuests(props) {
  return (
    <Container>
      <InputC>
        <Label>{props.Titulo}</Label>
        <Input id={ props.First }/>
      </InputC>
      <InputC>
        <Label>{ props.SubTitle }</Label>
        <Input id={ props.IdSecond }/>
      </InputC>
    </Container>
  );
}

InputGuests.propTypes = {
  Titulo:PropTypes.string,
  SubTitle:PropTypes.string,
  IdFirst:PropTypes.string,
  IdSecond:PropTypes.string,
};

export default InputGuests;
