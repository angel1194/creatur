import styled from 'styled-components';

const ContainerScore = styled.div`
  padding: 10px 10px 10px 20px;
  border-bottom:1px solid #eaeaea;
`;

const AddressLabel=styled.label`
  margin-top:-20px;
  color:#5e5e5e;
`;

const ContTrip=styled.div`
  margin-top:50px;
`;

const DivButton= styled.div`
  width:100%;
  height:40px;
  display:flex;
  flex-direction:row;
  justify-content:space-between
`;

const ButtonBlue= styled.button`
  width:150px;
  height:40px;
  background-color:#2b5bac;
  color:white !important;
`;

export {ContainerScore, AddressLabel, ContTrip, DivButton, ButtonBlue};
