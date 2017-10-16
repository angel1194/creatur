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
  @media only screen and (max-width: 568px) and (min-width: 220px) {
    font-size: 15px;
  }
`;

const Dates = styled.label`
  font-family: Montserrat;
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const Line = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
`

const styles ={
  container:{
    width: '100%',
    height: 'auto',
    border: '1px solid #eaeff3',
    padding:'20px',
    borderRadius: '0px 0px 6px 6px',
    display:'flex',
    flexDirection:'column',
  },
  containerInput:{
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  inputlabel:{
    flex: '1',
    margin: '0px 5px 0px 5px'
  },
  label:{
    color: '#2b5bac',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '400'
  },
  input:{
    width: '95%',
    boxShadow: 'inset 1px 1px 2px #ccc',
    padding: '10px',
    border: '1px solid #eaeff3',
    borderRadius: '6px',
    outline: '0',
    marginBottom: '10px',
    color: '#777'
  },
  inputCard:{
    width: '40%',
    margin: '0px 5px 0px 5px'
  },
  inputBig:{
    flex: '3',
    margin: '0px 5px 0px 5px'
  },
  inputMedium:{
    flex: '3',
    margin: '0px 5px 0px 5px'
  },
  inputSmall:{
    flex: '1',
    margin: '0px 5px 0px 5px'
  },
  inputSmall2:{
    flex: '1.3',
    margin: '0px 5px 0px 5px'
  },
  button:{
    background: '#7db464',
    color: '#fff',
    fontFamily: 'Montserrat',
    outline:'0',
    padding: '10px',
    width: '80px',
    borderRadius: '6px !important',
    alignItems: 'center'
  },
  message:{
    color: '#e74c3c',
    margin: '-5px 0px 5px 5px',
    fontSize: '10px',
    fontFamily: 'Montserrat'
  },
  room:{
    width: '100%',
    height: 'auto',
    border: '1px solid #eaeff3',
    padding:'20px',
    borderRadius: '6px',
    display:'flex',
    flexDirection:'column',
    marginBottom:'15px'
  },
  row:{
    display:'flex',
    flexDirection:'row'
  },
  subtitle:{
    color:'#848484',
    fontSize:'15px',
    marginLeft:'5px'
  },
  contact:{
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderTop:'1px solid #ccc',
    paddingTop:'10px'
  },
  textSmall:{
    color: '#7db464',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    margin:'0px 100px 10px 0px'
  },
  select:{
    width: '12%',
    boxShadow: 'inset 1px 1px 2px #ccc',
    padding: '10px',
    border: '1px solid #eaeff3',
    borderRadius: '6px',
    outline: '0',
    margin: '0px 30px 10px 0px',
    color: '#777',
    height: '37px'
  },
  selects:{
    flex: '1',
    margin: '0px 5px 0px 5px',
    display: 'flex',
    flexDirection: 'row'
  },
  containerSelect:{
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  inputSelect:{
    margin: '0px 5px 0px 5px',
    flexDirection: 'column',
    display: 'flex',
    width: '20%',
  },
  p:{
    color: '#c0392b',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    marginTop:'-6px'
  },
  inputOut:{
    width: '95%',
    boxShadow: 'inset 1px 1px 2px #ccc',
    padding: '10px',
    border: '1px solid #c0392b',
    borderRadius: '6px',
    outline: '0',
    marginBottom: '10px',
    color: '#777'
  },
}

export {Container, Message, TextM,styles, Dates, Line}
