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
import ImgMap from './MapDefault.jpg';

import HeaderTable from '../../HeaderTable';
import HotelRoom from '../../HotelRoom';
import Button from '../Button';
import TripAdvisor from '../TripAdvisor';
import PriceLabel from '../PriceLabel';
import SimpleSlider from './SimpleSlider';
import SliderTresItems from './SliderTresItems';
import {Link} from 'react-router';

const DivContainer = styled.div`
  margin: 0px 80px 0px 40px;
`;

const Usua = styled.div`
  text-align: right;
  width: 200px;
`;

const Text = styled(H3)`
  font-family: sans-serif;
  font-weight: bold;
  font-size:21px;
`;

const Star = styled.div`
  margin: 5px;
`;

const Rowtop = styled(Row)`
margin-top: 5px;
`;

const Div = styled(Row)`
  height: auto;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  margin-bottom: 68px;
`;

const Slick = styled.div`
  width: 734px;
`;

const Lugares =styled.div`
  margin: 14px 57px 0px 10px;
`

const UsD = styled.p`
  margin: 10px 0px 0px 0px;
  font-size: 18px;
`;

const Btnreserv = styled.div `
  margin-top: 28px;
  margin-bottom: 25px;
`;

const LineBlue = styled.div `
  background-color: #03A9F4;
  height: 1px;
  margin-left: -45px;
  width: 240px;
  margin-bottom: 25px
`;

const Map = styled.img `
  width: 212px;
  height: 102px;
  margin-left: -30px;
  border-radius: 6px;
`;

const FontBlue = styled(FontAwesome) `
    color: #204f9e !important;
    margin-right: 25px
`;

const IconsBlue = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 25px;
    margin-left: -15px;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
`;



const DivTop = styled.div`
  margin-top: 8px;
`;

const Price =styled.div `
  width: 160px;
  margin-bottom: 25px;
`;
const AncorMap = styled.div`
  margin-left: -30px;
  margin-bottom: 25px;
`;

const LineBlu =styled.div`
background-color: #58ACFA;
  height: 2px;
`

function Details() {

  return (
    <DivContainer>
      <Tabs selected='1'/>
      <Row>
        <Text>Jumeirah Vittaveli</Text>
        <Star><StarRating /></Star>
      </Row>
      <DivTop>
        <Subtitle GlobalText={"Maldivas"} />
      </DivTop>
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
          <Usua><img src="http://lorempixel.com/output/people-q-c-100-30-1.jpg"/></Usua>
          <Price><PriceLabel Since="3,089.56" MostSold="1" /></Price>
          <Subtitle GlobalText={"Habitación Económica"}/>
          <Icons>
            <TripAdvisor />
          </Icons>
          <Link to="/hotel/roomer">
              <Btnreserv>
                <Button Title="Reservar" />
              </Btnreserv>
          </Link>
          <LineBlue />
          <Map src={ImgMap}/>
          <AncorMap><a href="#"><Subtitle Ancor={"Ver Ubicación"} /></a></AncorMap>
          <Subtitle GlobalText={"Lugares de interés"} />
          <a href="#" ><Subtitle AncorUbication={"Plaza de Gaspar a 1km"} /></a>
          <a href="#" ><Subtitle AncorUbication={"Monasterio"} /></a>
          <a href="#" ><Subtitle AncorUbication={"Iglesia"} /></a>
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
      <HeaderTable />
      <HotelRoom NameRoom="Villa Sunset Water"/>
      <LineBlu />
      <HotelRoom NameRoom="Villa Sunrise Beach"/>
    </DivContainer>
  );
  }

Details.propTypes = {

};

export default Details;
