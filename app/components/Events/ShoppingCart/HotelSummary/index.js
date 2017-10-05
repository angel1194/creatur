import React from 'react';
import styled from 'styled-components';
import StarRating from '../../../ReserHotel/StarRating';
import moment from 'moment';
import {Container, Header, Title, Line, Body, ReserveInfo, Hotel, Label, Info, Text, SubText, CheckIn, DivSubTotal, RowDiv, SRowDiv, Footer, Img, NH3, EventManzanero, Rooms} from './style'


const NewSub=styled(SubText)`
  display: flex;
  flex-direction: row;
  font-size:12px;
`;

const DivCancel = styled(DivSubTotal)`
  border-bottom:none !important;
  margin-bottom:0px !important;
  margin-top:10px !important;
`;

const TextTotal= styled(Text)`
  font-size:16px;
`;

const P = styled.p`
  margin-top: 3px !important;
  color: #87b672;
  margin-left: 3px;
`;

const Price = styled.p`
  margin-top: 3px !important;
  margin-left: 3px;
  margin-right: 3px;
`;

const SubTextEvent = styled.label`
  color:#848484;
  display: flex;
  flex-direction: row;
`;

function HotelSummary(props) {
  let tickets = props.car.tickets

  return (
    <Container>
      <Header>
        <Title>
          Resumen de la Reservación
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
          <Text>{props.elements.taken} {props.elements.taken >=2 ? 'Habitaciones' : 'Habitación'}:</Text>
          <SubText>{props.elements.description}</SubText>
        </Info>
        <CheckIn>
          <div>
            <Text>Entrada:</Text>
            <SubText>{moment(props.checkin).format('LL')}</SubText>
          </div>
          <div>
            <Text>Salida:</Text>
            <SubText>{moment(props.checkout).format('LL')}</SubText>
          </div>
          <Text>Estancia de {props.count} noches</Text>
        </CheckIn>
        <DivSubTotal>
          <RowDiv>
            <Rooms>Habitación 1</Rooms>
          </RowDiv>
          <SRowDiv>
            <Rooms>prom./noche</Rooms>
          </SRowDiv>
          <RowDiv>
            <NewSub>{props.count} noches</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>MXN ${props.elements.price * props.count}</SubText>
          </SRowDiv>
          <RowDiv>
            <NewSub>Por noche</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>MXN ${props.elements.price}</SubText>
          </SRowDiv>
        </DivSubTotal>
        {tickets ?
          <DivSubTotal>
            <EventManzanero>{Object.keys(tickets).length} Ticket Manzanero</EventManzanero>
            <RowDiv>
              <NewSub>{Object.keys(tickets).length >= 2 ? 'Asientos' : 'Asiento'}: {Object.keys(tickets).map((item, i)=><P key={i}>{tickets[item].seat + ", "}</P>)}</NewSub>
            </RowDiv>
            <SRowDiv>
              <SubTextEvent>MXN ${props.option[props.section].price} c/u</SubTextEvent>
            </SRowDiv>
          </DivSubTotal>
        : ''}
      </Body>
      <Footer>
        <TextTotal>Total:</TextTotal>
        <TextTotal>MXN</TextTotal>
        <NH3>${props.elements.price * props.count * props.elements.taken + (tickets ? props.option[props.section].price * Object.keys(tickets).length : 0)}</NH3>
      </Footer>
    </Container>
  );
}

HotelSummary.propTypes = {

};

export default HotelSummary;
