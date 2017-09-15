import styled from 'styled-components';

const Div = styled.div`
  border:  2px solid #F2F2F2;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const style = {
  container:{
    display: 'flex',
    flexDirection: 'column',
  },
  label:{
    color: '#2b5bac',
    fontFamily: 'Montserrat',
    fontSize: '11px'
  },
  select1:{
    width: '70px',
    height: '30px',
    border: '2px solid #cdcdcd',
    outline: '0',
    color: '#555',
    marginBottom: '8px'
  },
  select2:{
    width: '125px',
    height: '30px',
    border: '2px solid #cdcdcd',
    outline: '0',
    color: '#555',
    marginBottom: '8px',
    paddingLeft: '5px',
    borderRadius: '4px'
  },
  select3:{
    width: '170px',
    height: '30px',
    border: '2px solid #cdcdcd',
    outline: '0',
    color: '#555',
    marginBottom: '8px',
    paddingLeft: '5px',
    borderRadius: '4px'
  },
  button:{
    background: '#2b5bac',
    padding: '8px 10px 10px 10px',
    color: '#fff',
    fontFamily: 'Montserrat',
    height: '35px',
    marginTop: '15px',
    outline: '0',
    borderRadius: "6px !important"
  }
}

export {Div, Container, style}
