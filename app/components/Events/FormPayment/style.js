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

// input

const Containers = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    height:80px;
`;

const input ={
  inputC:{
    'width': '50%',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'flexStart',
    'paddingRight': '30px'
  },
  label:{
    color: '#2b5bac',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '400'
  },
  inputMain:{
    width: '100%',
    boxShadow: 'inset 1px 1px 2px #ccc',
    height: '35px',
    border: '1px solid #eaeff3',
    paddinLeft: '10px',
    borderRadius: '6px',
    outline: '0'
  }
}

export {Container, Message, TextM, InputContainer,input}
