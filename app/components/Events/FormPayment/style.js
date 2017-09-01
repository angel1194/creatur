import styled from 'styled-components'

const Container=styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Message=styled.div`
  width: 100%;
  padding-left: 20px;
  background-color: #F2F2F2;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #2b5bac;
  border-radius: 6px 6px 0px 0px;
`;

const TextM = styled.label`
  font-size: 25px;
  font-family: Montserrat !important;
  font-weight: bold;
`;

const styles ={
  form:{
    width: '100%',
    height: 'auto',
    border: '1px solid #eaeff3',
    padding:'20px',
    borderRadius: '0px 0px 6px 6px',
    display:'flex',
    flexDirection:'column'
  },
  container:{
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  inputlabel:{
    width: '49%'
  },
  label:{
    color: '#2b5bac',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '400'
  },
  input:{
    width: '100%',
    boxShadow: 'inset 1px 1px 2px #ccc',
    padding: '10px',
    border: '1px solid #eaeff3',
    borderRadius: '6px',
    outline: '0',
    marginBottom: '10px'
  },
  target:{
    width: '23%'
  }
}

export {Container, Message, TextM,styles}
