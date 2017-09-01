import styled from 'styled-components'

const Container=styled.div`
  width:100%;
  display:flex;
  height:250px;
  flex-direction:column;
  flex-wrap:wrap;
`;

const Message=styled.div`
  width:100%;
  padding-left:20px;
  background-color:#F2F2F2;
  height:50px;
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#2b5bac;
  border-radius: 6px 6px 0px 0px;
`;

const TextM = styled.label`
  font-size:25px;
  font-family:Montserrat !important;
  font-weight:bold;
`;

const InputContainer = styled.div`
  width:100%;
  height:200px;
  border: 1px solid #eaeff3;
  padding:25px 40px 0px 25px;
  display:flex;
  flex-direction:column;
  border-radius: 0px 0px 6px 6px;
`;

export {Container, Message, TextM, InputContainer}
