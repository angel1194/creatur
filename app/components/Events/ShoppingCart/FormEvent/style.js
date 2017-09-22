import styled from 'styled-components';

const Div = styled.div`
  border:  2px solid #F2F2F2;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const style = {
  form:{
    width: '580px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container:{
    display: 'flex',
    flexDirection: 'column',
  },
  label:{
    color: '#2E2E2E',
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
    width: '200px',
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

const MapConcierto = styled.div`
  ${'' /* border: 1px solid #f2f2f2; */}
  ${'' /* width: 510px; */}
  margin: auto;
  padding-top: 25px;
`;

const Ticket = styled.div`
  margin: 20px 20px 0px 0px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
`;

const THeader = styled.div`
  background: #2b5bac;
  color: #fff;
  font-family: Montserrat;
  border-radius: 6px 6px 0px 0px;
  width: 260px;
  padding: 10px;
  text-align: center;
`;

const TBody = styled.div`
  border: 1px solid #ccc;
  width: 260px;
  padding: 10px;
  color: #999;
  font-family: Montserrat;
`;

const BoletoRes = styled.div`
  color: #2b5bac;
`;

const Count = styled.div`
  color: #87b672;
  margin-left: 5px;
`;

const P = styled.p`
  font-size: 11px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Pay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Buy = styled.button`
  background: #87b672;
  padding: 5px;
  border-radius: 6px !important;
  color: #fff;
  width: 80px;
  text-align: center;
  cursor: pointer;
  outline: 0;
  margin-top: 10px;

  &:hover {
    background: #87b182;
    box-shadow: 1px 1px 2px #999;
  }
`;

const Price = styled.p`
  display: flex;
  flex-direction: row;
`

export {Div, Container, style, MapConcierto, Ticket, Search, THeader, TBody, BoletoRes, Count, P, Row, Pay, Buy, Price}
