import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 180px;
  border: 2px solid #eaeff3;
  border-radius: 6px;
`;

const WrapperTrans = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:  space-between ;
  margin: 0;
  padding: 0;
  width: 100%;
  border-left: 2px solid #eaeff3;
  border-right: 2px solid #eaeff3;
  border-bottom: 2px solid #eaeff3;
  border-radius: 0 0 6px 6px;
`;

const Title = styled.p`
  font-family: Roboto;
  font-size: 21px;
  color: #2b5bac;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: -2px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row ;
  align-items: flex-start;
`;

const Img = styled.img`
  width:200px;
  height:158px;
  border-radius: 6px !important;
`;

export { Column, Wrapper, WrapperTrans, Title, Row, Img };