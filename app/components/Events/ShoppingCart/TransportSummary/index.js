import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Container, Header, Title, Line, Body, ReserveInfo, Hotel, Label, Info, Text, SubText, CheckIn, DivSubTotal, RowDiv, SRowDiv, Footer, Img, NH3, EventManzanero} from './style'

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

const Icon = styled(FontAwesome)`
  color: #c0392b;
  margin-bottom: 10px;
  margin-top: -15px;
  text-align: right;
  font-size: 18px;
  cursor: pointer;
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

function TransportSummary(props) {
  let tickets = props.car.tickets
  let carObject = props.carObject

  return (
    <Container>
      <Header>
        <Title>
          Resumen del Transporte
        </Title>
        <Line/>
      </Header>
      <Body>
        <Hotel>Concierto Manzanero</Hotel>
        {Object.keys(carObject).map((item,i)=>
          <div key={i}>
            <Img src={carObject[item].image}/>
            <ReserveInfo>
              <Label>Tipo de transporte: {carObject[item].type}</Label>
            </ReserveInfo>
            <Info>
              <Text>Descripción</Text>
              <Text>{carObject[item].taken} {carObject[item].taken >= 2 ? 'Asientos' : 'Asiento'}</Text>
            </Info>
          </div>
        )}
        <CheckIn>
          <div>
            <Text>Salida:</Text>
            <SubText>10:30 am</SubText><br/>
            <Text>Total de Asientos:</Text>
            <SubText>{props.seating}</SubText>
          </div>
        </CheckIn>
        <DivSubTotal>
          <RowDiv>
            <NewSub>Por Asientos</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>MXN ${props.price}</SubText>
          </SRowDiv>
        </DivSubTotal>
        {tickets ?
          <div>
            {Object.keys(tickets).length >= 1 ?
              <div>
                <EventManzanero>{Object.keys(tickets).length} Ticket Manzanero</EventManzanero>
                <DivSubTotal>
                  <RowDiv>
                    <NewSub>{Object.keys(tickets).length >= 2 ? 'Asientos' : 'Asiento'}: {Object.keys(tickets).map((item, i)=><P key={i}>{tickets[item].seat + ", "}</P>)}</NewSub>
                  </RowDiv>
                  <SRowDiv>
                    <SubTextEvent>MXN ${props.option[props.section].price} c/u</SubTextEvent>
                  </SRowDiv>
                  <Icon name="trash" onClick={()=>props.removeTicket()}/>
                </DivSubTotal>
              </div>
            : ''}
          </div>
        : ''}
      </Body>
      <Footer>
        <TextTotal>Total:</TextTotal>
        <NH3>${props.price * props.seating + (tickets ? props.option[props.section].price * Object.keys(tickets).length : 0)}</NH3>
        <TextTotal>MXN</TextTotal>
      </Footer>
    </Container>
  );
}

export default TransportSummary;
