/**
*
* PriceRoom
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

import Subtitle from '../../Subtitle';
import TripAdvisor from '../../TripAdvisor';
import Button from '../../Button';
import ImgMap from './../MapDefault.jpg';

const Div = styled.div `
  margin: 15px 25px 0px 0px;
`;

const Usua = styled.div`
  text-align: right;
`;

const Main = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;

const Row = styled.div `
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`;

const Price =styled.div `
  color: #2B5BAC;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 31px;
`;

const Usd = styled.div `
  color: grey;
  font-size: 18px;
  margin: 3px 0px 0px 3px;
  font-family: Roboto;
  font-weight: 400px
`;

const PriceN = styled.div `
  text-align: right;
  width: 100%;
  margin-bottom: 25px;
`;

const Btnreserv = styled.div `
  margin-top: 28px;
  margin-bottom: 25px;
`;

const LineBlue = styled.div `
  background-color: #03A9F4;
  height: 2px;
  width: 240px;
  margin-bottom: 25px
`;

const Map = styled.img `
  width: 212px;
  height: 102px;
  border-radius: 6px;
`;

const AncorMap = styled.div`
  margin-bottom: 25px;
`;

const IconsBlue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 25px;
  width: 200px;
`;

const FontBlue = styled(FontAwesome) `
  color: #204f9e !important;
  font-size: 32px;
`;
function PriceRoom() {
  return (
    <Div>
      <Usua><img src="http://lorempixel.com/output/abstract-q-c-100-30-2.jpg"/></Usua>
      <Main>
        <Subtitle GlobalText={"desde"}/>
        <Row>
          <Price><Subtitle Price={"$3,089.56"}/></Price>
          <Usd>USD</Usd>
        </Row>
        <PriceN><Subtitle GlobalText={"precio por noche"}/></PriceN>
        <div>
          <Subtitle GlobalText={"Habitación Económica"}/>
          <TripAdvisor />
          <Link to="/hotel/roomer">
              <Btnreserv>
                <Button Title="Reservar" />
              </Btnreserv>
          </Link>
        </div>
        <LineBlue />
        <Map src={ImgMap}/>
        <AncorMap>
          <a href="#"><Subtitle Ancor={"Ver Ubicación"} /></a>
        </AncorMap>
        <div>
          <Subtitle GlobalText={"Lugares de interés"} />
          <a href="#" ><Subtitle AncorUbication={"Plaza de Gaspar a 1km"} /></a>
          <a href="#" ><Subtitle AncorUbication={"Monasterio"} /></a>
          <a href="#" ><Subtitle AncorUbication={"Iglesia"} /></a>
        </div>
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
      </Main>
    </Div>
  );
}

PriceRoom.propTypes = {

};

export default PriceRoom;
