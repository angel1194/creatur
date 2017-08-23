import styled from 'styled-components';

const Div = styled.div`
  width:100%;
  padding: 10px 25px 10px 25px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div`
  border: 1px solid #EAEFF3;
  border-radius: 5px;
  text-align: center;
  margin: 0px 0px 12px 0px;
  padding: 3px 0px 0px 0px;
`;

const Reg = styled.div`
  font-size: 12px;
  margin-left: 22px;
`;

const WrapperTrans = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:  space-between ;
  width: 100%;
  border-left: 2px solid #eaeff3;
  border-right: 2px solid #eaeff3;
  border-bottom: 2px solid #eaeff3;
  border-top: 0px solid #eaeff3;
  border-radius: 0px 0px 6px 6px;
`;

export {Div, Row, Column, Price, Reg, WrapperTrans};