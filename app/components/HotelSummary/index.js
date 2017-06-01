/**
*
* HotelSummary
*
*/

import React from 'react';
import styled from 'styled-components';
import hotel from './hotel.jpg'
import H3 from '../ReserHotel/H3'
import StarRating from '../ReserHotel/StarRating'

const Container = styled.div`
  width:23%;
  max-height:600px;
  border:1px solid #eaeff3;
`;

const Header=styled.div`
  height:55px;
  background-color:#2b5bac;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:6px 6px 0px 0px;
`;

const Title=styled.label`
  font-family:Montserrat;
  font-size:18px;
  color:white;
`;

const Line = styled.div`
  width:80%;
  height:1px;
  border:1px solid #5882FA;
  margin-top:5px;
`;

const Body = styled.div`
  width:100%;
  padding:10px 20px 0px 20px;
  display:flex;
  flex-direction:column;
`;

const ReserveInfo= styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  margin-bottom:10px
  margin-top:5px
`;

const Hotel = styled(H3)`
  margin-bottom:-5px
`;

const Label= styled.label`
  font-family:Montserrat
  color:black
  font-size:12px
  margin-top:-5px
`;

const Info = styled.div`
  width:100%;
  display:flex;
  flex-direction:column
`;

const Text = styled.label`
  color:#2E2E2E
`;

const SubText = styled.label`
  color:#848484
`;

const CheckIn = styled.div`
  margin-top:10px;
  width:100%;
  display:flex;
  flex-direction:row
  flex-wrap:wrap
  border-bottom:1px solid #ccc
  padding-bottom:20px;
`;

const DivSubTotal = styled.div`
    border-bottom:1px solid #ccc
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row'
    flex-wrap:wrap;
    margin-top:15px
`;

const RowDiv=styled.div`
  width:50%
  height:20px;
  display:flex;
  flex-direction:row;
  align-items:center
  justify-content:flex-start
`;

const SRowDiv=styled.div`
  width:50%
  height:20px;
  display:flex;
  flex-direction:row;
  align-items:center
  justify-content:flex-end
`;

const NewSub=styled(SubText)`
  font-size:12px;
`;

const DivCancel = styled(DivSubTotal)`
  border-bottom:none !important
  margin-bottom:0px !important
`;

const Footer = styled.div`
  width:100%;
  background-color:#e2e2e2
  height:50px;
  margin-top:-20px
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding-right:20px
`;

const TextTotal= styled(Text)`
  font-size:16px;
`;

const NH3 = styled(H3)`
  margin-left:5px
  font-size:20px
  font-family:Roboto;
  margin-right:5px;
`;

function HotelSummary() {
  return (
    <Container>
      <Header>
        <Title>
          Resumen de Viaje
        </Title>
        <Line/>
      </Header>
      <Body>
        <img src={ hotel } width="218"/>
        <ReserveInfo>
          <Hotel>Hotel Nayarit Spa</Hotel>
          <StarRating NumStart={4.0}/>
          <Label>Cd. de Mexico</Label>
        </ReserveInfo>
        <Info>
          <Text>1 habitacion para 2 adultos</Text>
          <Text>Todo Incluido</Text>
          <Text>Estancia de 4 noches</Text>
        </Info>
        <CheckIn>
          <Text>Entrada:</Text>
          <SubText>Mie 1 de marzo, 2017</SubText>
          <Text>Salida:</Text>
          <SubText>Dom 5 de marzo, 2017</SubText>
        </CheckIn>
        <DivSubTotal>
          <RowDiv>
            <NewSub>4 noches de hospedaje</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>$1,200.56 USD</SubText>
          </SRowDiv>
          <RowDiv>
            <NewSub>Impuestos y cargos</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>$350.56 USD</SubText>
          </SRowDiv>
        </DivSubTotal>
        <DivCancel>
          <RowDiv>
            <NewSub>Cargos de cancelacion</NewSub>
          </RowDiv>
          <SRowDiv>
            <SubText>$350.56 USD</SubText>
          </SRowDiv>
        </DivCancel>
      </Body>
      <Footer>
        <TextTotal>Total:</TextTotal>
        <NH3>$3,089.56</NH3>
        <TextTotal>USD</TextTotal>
      </Footer>
    </Container>
  );
}

HotelSummary.propTypes = {

};

export default HotelSummary;
