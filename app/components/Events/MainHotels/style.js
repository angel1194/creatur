import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DivHotels = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-family: Roboto !important;
  font-size: 24px !important;
  color: #2b5bac !important;
  font-weight: bold !important;
`;

const DivCheck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
 const Check = styled.p`
  font-family: Roboto;
  font-size: 17px;
  color: #5e5e5e;
 `;


export {Div, DivHotels, Title, DivCheck, Check};
