import React from 'react';
import styled from 'styled-components';
import StarRating from '../../../ReserHotel/StarRating';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import {Container, Header, Title, Line, Body, ReserveInfo, Hotel, Label, Info, Text,
  SubText, CheckIn, DivSubTotal, RowDiv, SRowDiv, Footer, Img, NH3, EventManzanero,
  Rooms, RoomsUI, PriceN} from './style';


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

const Icon = styled(FontAwesome)`
  color: #c0392b;
  margin-bottom: 10px;
  text-align: right;
  font-size: 18px;
  cursor: pointer;
`;

function HotelSummary(props) {
  let tickets = props.car.tickets
  let taken = props.elements.taken
  let roomsUI = props.roomsUI

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
            <SubText>{moment(props.checkin).format('ll')}</SubText>
          </div>
          <div>
            <Text>Salida:</Text>
            <SubText>{moment(props.checkout).format('ll')}</SubText>
          </div>
          <Text>Estancia de {props.count} noches</Text>
        </CheckIn>
        {Object.keys(roomsUI).map((item, i)=>
          <DivSubTotal key={i}>
            <RoomsUI>
              <Rooms>Habitación {i+1}</Rooms>
              <NewSub>
                <div>{roomsUI[item].adult} {roomsUI[item].adult >= 2 ? ' Adultos, ' : ' Adulto, '}</div>
                {roomsUI[item].baby >= 1 ? <div>{roomsUI[item].baby} {roomsUI[item].baby >= 2 ? ' bebes' : ' bebe'},</div> : ''}
                {Object.keys(roomsUI[item].child).length >= 1 ? <div>{Object.keys(roomsUI[item].child).length} {Object.keys(roomsUI[item].child).length >= 2 ? ' niños' : ' niño'}</div> : ''}
              </NewSub>
            </RoomsUI>
            <PriceN>
              <NewSub>{props.count} noches</NewSub>
              <SubText>MXN ${props.elements.price * props.count}</SubText>
            </PriceN>
            <PriceN>
              <NewSub>Por noche</NewSub>
              <SubText>MXN ${props.elements.price}</SubText>
            </PriceN>
          </DivSubTotal>
        )}
        {tickets ?
          <div>
            {Object.keys(tickets).length >= 1 ?
              <DivSubTotal>
                <RoomsUI>
                  <EventManzanero>{Object.keys(tickets).length} Ticket Manzanero</EventManzanero>
                </RoomsUI>
                <PriceN>
                  <RowDiv>
                    <NewSub>{Object.keys(tickets).length >= 2 ? 'Asientos' : 'Asiento'}: {Object.keys(tickets).map((item, i)=><P key={i}>{tickets[item].seat + ", "}</P>)}</NewSub>
                  </RowDiv>
                  <SRowDiv>
                    <SubTextEvent>MXN ${props.option[props.section].price} c/u</SubTextEvent>
                  </SRowDiv>
                </PriceN>
                <Icon name="trash" onClick={()=>props.removeTicket()}/>
              </DivSubTotal>
            : ''}
          </div>
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
