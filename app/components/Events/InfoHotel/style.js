import styled from 'styled-components';

const ContainerHotel = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  border:1px solid #eaeaea;
  margin-bottom:20px;
  border-radius: 6px;
`;

const Img = styled.img`
  width: 370px;
  height: 285px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export {ContainerHotel, Img, Row};
