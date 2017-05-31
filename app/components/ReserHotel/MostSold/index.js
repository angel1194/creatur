/**
*
* MostSold
*
*/

import React from 'react';
import styled from 'styled-components';
import Column from './StyledMS/Column';
import Row from './StyledMS/Row';
import Img from './StyledMS/Img';
import HtImg from './defaultHotel.jpg';
import Title from '../../../components/ReserHotel/Title';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import LocationLabel from '../../../components/ReserHotel/LocationLabel';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FontAwesome from 'react-fontawesome';
import PriceLabel from '../../../components/ReserHotel/PriceLabel';
import logoTripAdvisor from './tripadvisor.png'
const Container = styled(Column) `
    border: 2px solid #eaeff3;  
`;

const ColumnElement = styled(Column) `
    width:100%
    height: 285px;
    padding: 9px;
`;

const ContainerItems = styled(Column) `
    width:100%
    height: 100%;
    border:2px solid #eaeff3;

`;

const ContainerTS = styled(Column) `
  align-self: flex-start;
  padding-top: 5px;
  padding-left: 10px;
`;

const P = styled(H3) `
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PB = styled(H3) `
  color: #87b672;
  margin-left: 10px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const FontA = styled(FontAwesome) `
    color: #87b672 !important;
    font-weight: 900 !important;
    top:-5px !important;
    position: relative !important;
`;

const FontB = styled(FontAwesome) `
    color: #87b672 !important;
    font-weight: 900 !important;
    top:-5px !important;
    position: relative !important;
    margin-left: 10px !important;
`;

const Div = styled.div`
  border: 1px solid #eaeff3;
  margin: auto;
  margin-top: 8px;
  padding-bottom: 5px;
`;

const RowRight = styled(Column) `
    align-items: flex-end;
    padding-right: 10px;
`;


const ImgIcon = styled.img`
    width:18px; 
    height:11px;
    margin-left: 10px !important;

`;

function GenereteRow() {

  let ArrElements = [];

  let ANumStars = [3.0, 4.5];
  let ATitles = ["Le Dokhans, a Tribute Portfoli", "Splendid Etoile"]
  let APrice = [{ price1: "234.32" }, { price1: "354.35" }];
  let Atrib = ["4.5", "5.0"];
  let AImage = ["http://fdc299df7e8620a6a240-772058fd34e7c581cd222855053d4ddc.r68.cf1.rackcdn.com/responsive/575/fdc299df7e8620a6a240-772058fd34e7c581cd222855053d4ddc.r68.cf1.rackcdn.com/lps/assets/u/trp4456ex-188420-Exterior-2-1.jpg",
    "http://www.dilos.com/picture/hotel/87507"
  ]
  for (var i = 0; i <= 1; i++) {
    ArrElements.push(
      <ColumnElement>
        <ContainerItems>
          <ContainerTS>
            <P>{ATitles[i]}</P>
            <Row>
              <StarRating NumStart={ANumStars[i]} />
               <ImgIcon src={logoTripAdvisor} />
              <PB>{Atrib[i]}</PB>
            </Row>
          </ContainerTS>
          <RowRight>
            <PriceLabel Tam={"Com"} Since={APrice[i].price1} Currency={"USD"} MostSold={true} />
          </RowRight>
          <Img src={AImage[i]} Width={"190px"} />
        </ContainerItems>
      </ColumnElement>
    )

  }

  return ArrElements;


}


function MostSold() {
  return (
    <Container>
      <Row>
        <Title Title="Lo más vendido" />
      </Row>
      {GenereteRow()}

    </Container>
  );
}

MostSold.propTypes = {

};

export default MostSold;
