import React, { PropTypes } from 'react';
import styled from 'styled-components';
//import Column from './StyledD/Column';
import Row from './StyledD/Row';
import Tabs from '../Tabs';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import Subtitle from '../../../components/ReserHotel/Subtitle';
import FontAwesome from 'react-fontawesome';
import { ButtonStyled, Title, Line, Arrow, Wrapper } from '../Button/StyledButton/ButtonStyled';
import ImgMap from './MapDefault.jpg';

const Text = styled(H3)`
  font-family: sans-serif;
  font-weight: bold;
`;

const Star = styled.div`
  margin-top: 10px;
`;

const Rowtop = styled(Row)`
margin-top: 5px;
`;

const Div = styled(Row)`
  margin-top: 10px;
  width: 100%;
  height: auto;
  border: 1px solid #cdcdcd;
`;

const Slider = styled.div`
  width: 75%;
`;

const Lugares = styled.div`
  width: 25%;
  margin-top: 40px;
`;

const Number = styled(H3)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 28px;
`;

const UsD = styled.p`
  margin: 10px 0px 0px 0px;
  font-size: 18px;
`;

const P = styled.p`
  text-align: right;
  margin: 5px 78px 0px 0px;
`;

const P1 = styled.p`
  margin-bottom: -10px;
`;

const FontB = styled(FontAwesome) `
    color: #2c3e50 !important;
    font-weight: 900 !important;
    top:-5px !important;
`;

const FontA = styled(FontAwesome) `
    color: #27ae60 !important;
    font-weight: 900 !important;
    margin-left: 5px;
`;

const Btnreserv = styled(ButtonStyled) `
  margin-top: 35px;
  width: 70%;
`;

const LineBlue = styled.div `
  margin-top: 20px;
  background-color: #03A9F4;
  height: 1px;
  margin-left: -30px;
  width: 95%;
`;

const Map = styled.img `
width: 85%;
height: 110px;
margin-top: 20px;
margin-left: -18px;
`;


function Details() {
  return (
    <div>
      <Tabs />
      <Row>
        <Text>Jumeirah Vittaveli</Text>
        <Star><StarRating /></Star>
      </Row>
      <Subtitle GlobalText={"Maldivas"} />
      <Rowtop>
        <Subtitle GlobalText={"South Male Atoll, 20219 Malé South, Asian Boulevard"}/>
        <Subtitle TextGrey ={"Tel. 01 800 000 0000"}/>
      </Rowtop>
      <Div>
        <Slider>

        </Slider>
        <Lugares>
          <P1><Subtitle GlobalText={"desde"} /></P1>
          <Rowtop>
            <Number>$3,089.56</Number>
            <UsD><Subtitle TextGrey ={"USD"}/></UsD>
          </Rowtop>
          <P><Subtitle TextGrey={"Precio por noche"}/></P>
          <Subtitle GlobalText={"Habitación Económica"}/>
          <FontB name='tripadvisor' size="lg" />
          <FontA name='dot-circle-o' size="lg"/>
          <FontA name='dot-circle-o' size="lg"/>
          <FontA name='dot-circle-o' size="lg"/>
          <FontA name='dot-circle-o' size="lg"/>
          <FontA name='circle-thin' size="lg"/>
          <Btnreserv>
            <Wrapper>
              <Title>Reservar</Title>
              <Title><Arrow name='angle-right' size="lg" /></Title>
            </Wrapper>
            <Line />
          </Btnreserv>
          <LineBlue />
          <Map src={ImgMap}/>
          <Subtitle Ancor={"Ver mapa"} />
        </Lugares>
      </Div>
    </div>
  );
}

Details.propTypes = {

};

export default Details;
