import styled from 'styled-components';

const ContainerBookingHotel=styled.div`
  width:35%;
  background-color:#FAFAFA;
  height:auto;
  padding: 20px 10px 20px 30px;
`;

const Subtitle=styled.label`
  color:#2E2E2E;
  margin-left:15px;
  margin-right:5px;
`;

const LabelBooking= styled.label`
  color:#5e5e5e;
`;

const ContainerCheck=styled.div`
  width:80%;
  margin-top:10px;
  display: flex;
  justify-content:space-between;
  flex-wrap:nowrap;
`;

export {ContainerBookingHotel, Subtitle, LabelBooking, ContainerCheck};
