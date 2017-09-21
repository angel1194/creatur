import React from 'react';
import styled from 'styled-components';
import StarRating from '../../../ReserHotel/StarRating';
import {Container, Header, Title, Line, Body, ReserveInfo, Hotel, Label, Info, Text, SubText, CheckIn, DivSubTotal, RowDiv, SRowDiv, Footer, Img, NH3} from './style'

const NewSub=styled(SubText)`
  font-size:12px;
`;

const DivCancel = styled(DivSubTotal)`
  border-bottom:none !important
  margin-bottom:0px !important
`;

const TextTotal= styled(Text)`
  font-size:16px;
`;

function HotelSummary(props) {
  return (
    <Container>
      <Header>
        <Title>
          Reservación
        </Title>
        <Line/>
      </Header>
      <Body>
        <Img src={props.item[props.elements.idHotel].image}/>
        <ReserveInfo>
          <Hotel>{props.item[props.elements.idHotel].name}</Hotel>
          <StarRating NumStart={Number(props.item[props.elements.idHotel].star)}/>
          <Label>{props.item[props.elements.idHotel].address}</Label>
        </ReserveInfo>
        <Info>
          <Text>{props.elements.description}</Text>
          <Text>Estancia de {props.count} noches</Text>
        </Info>
        <CheckIn>
          <div>
            <Text>Entrada:</Text>
            <SubText>{props.checkin}</SubText>
          </div>
          <div>
            <Text>Salida:</Text>
            <SubText>{props.checkout}</SubText>
          </div>
        </CheckIn>
        <DivSubTotal>
          <RowDiv>
            <NewSub>Por noches de hospedaje</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>${props.elements.price} MXN</SubText>
          </SRowDiv>
        </DivSubTotal>
        <DivCancel>
          <RowDiv>
            <NewSub>Seccion A Fila SS, Asientos 19-20</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>$350.56 c/u</SubText>
          </SRowDiv>
        </DivCancel>
      </Body>
      <Footer>
        <TextTotal>Total:</TextTotal>
        <NH3>${props.elements.price * props.count}</NH3>
        <TextTotal>MXN</TextTotal>
      </Footer>
    </Container>
  );
}

HotelSummary.propTypes = {

};

export default HotelSummary;
