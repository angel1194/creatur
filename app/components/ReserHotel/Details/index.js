import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
//import Column from './StyledD/Column';
import Row from './StyledD/Row';
import Tabs from '../Tabs';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import Subtitle from '../../../components/ReserHotel/Subtitle';
import FontAwesome from 'react-fontawesome';
import { ButtonStyled, Title, Line, Arrow, Wrapper } from '../Button/StyledButton/ButtonStyled';
import ImgMap from './MapDefault.jpg';
import CircleGreen from '../CirclesGreen';

import DetailsRoom from './DetailsRoom';
import DetailsRoom1 from './DetailsRoom1';
import HeadertableDetails from './HeadertableDetails';

import SimpleSlider from './SimpleSlider';
import SliderTresItems from './SliderTresItems';

const DivContainer = styled.div`
  width: 100%;
`;

const Text = styled(H3)`
  font-family: sans-serif;
  font-weight: bold;
`;

const Star = styled.div`
  margin-top: 8px;
  margin-left: 5px;
`;

const Rowtop = styled(Row)`
margin-top: 5px;
`;

const Div = styled(Row)`
  margin-top: 10px;
  height: auto;
  border: 1px solid #cdcdcd;
  margin-bottom: 60px;
`;

const Slick = styled.div`
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
    top:-5px !important;
    margin-top: 4px;
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

const FontA = styled(FontAwesome) `
    color: #27ae60 !important;
    font-weight: 900 !important;
    margin-left: 5px;
    margin-top: 4px;
`;

const Map = styled.img `
width: 85%;
height: 110px;
margin-top: 20px;
margin-left: -18px;
`;

const FontBlue = styled(FontAwesome) `
    color: #2b5bac !important;
`;

const IconsBlue = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    width: 70%;
    margin-bottom: 25px;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
`;

const LineDetails = styled.div`
  width: 100%;
  height: 2px;
  background-color: #58ACFA;
`;

function Details() {

  return (
    <DivContainer>
      <Tabs selected='1'/>
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
        <Slick>
          <SimpleSlider />
          <SliderTresItems />
        </Slick>
        <Lugares>
          <P1><Subtitle GlobalText={"desde"} /></P1>
          <Rowtop>
            <Number>$3,089.56</Number>
            <UsD><Subtitle TextGrey ={"USD"}/></UsD>
          </Rowtop>
          <P><Subtitle TextGrey={"Precio por noche"}/></P>
          <Subtitle GlobalText={"Habitación Económica"}/>
          <Icons>
            <FontB name='tripadvisor' size="lg" />
            <CircleGreen/>
            <FontA name='circle-thin' size="lg"/>
          </Icons>
          <Btnreserv>
            <Wrapper>
              <Title>Reservar</Title>
              <Title><Arrow name='angle-right' size="lg" /></Title>
            </Wrapper>
            <Line />
          </Btnreserv>
          <LineBlue />
          <Map src={ImgMap}/>
          <a href="#"><Subtitle Ancor={"Ver Ubicación"} /></a>
          <Subtitle GlobalText={"Lugares de interés"} />
          <a href="#" ><Subtitle AncorUbication={"Plaza de Gaspar a 1km Monasterio Iglesia"} /></a>
          <IconsBlue>
            <Tooltip placement="bottomRight" overlay="Información general" arrowContent={<div className="rc-tooltip-arrow-inner"></div>}>
              <a href="#"><FontBlue name='info-circle' size="2x"/></a>
            </Tooltip>
            <FontBlue name='check-square' size="2x"/>
            <FontBlue name='minus-square' size="2x"/>
            <Tooltip placement="bottomLeft" overlay="Términos y Condiciones" arrowContent={<div className="rc-tooltip-arrow-inner"></div>}>
              <a href="#"><FontBlue name='exclamation-circle' size="2x"/></a>
            </Tooltip>
          </IconsBlue>
        </Lugares>
      </Div>
      <HeadertableDetails />
      <DetailsRoom />
      <LineDetails/>
      <DetailsRoom1 />
    </DivContainer>
  );
  }

Details.propTypes = {

};

export default Details;
