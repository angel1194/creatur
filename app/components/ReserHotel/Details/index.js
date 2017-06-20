import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
//import Column from './StyledD/Column';
import Row from './StyledD/Row';
import Tabs from '../Tabs';
import H3 from '../../../components/ReserHotel/H3';
import StarRating from '../../../components/ReserHotel/StarRating';
import Subtitle from '../../../components/ReserHotel/Subtitle';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../../HotelRoom';
import SimpleSlider from './SimpleSlider';
import SliderTresItems from './SliderTresItems';
import PriceRoom from './PriceRoom';


const DivContainer = styled.div`
  margin: 0px 35px 0px 35px;
`;

const ContainerTab = styled.div`
  margin: 0px 40px 0px 40px;
`;

const Rowtop = styled(Row)`
  margin-top: 5px;
`;

const Text = styled(H3)`
  font-family: sans-serif;
  font-weight: bold;
  font-size:21px;
`;

const Star = styled.div`
  margin: 5px;
`;

const DivTop = styled.div`
  margin-top: 8px;
`;

const ContainerPriceSlick = styled(Row)`
  display: flex;
  justify-content: space-between;
  height: auto;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  margin-bottom: 68px;
`;

const Slick = styled.div`
  width: auto;
`;

const Lugares =styled.div`
`;

const LineBlu =styled.div`
  background-color: #58ACFA;
  height: 2px;
  width: 80%;
`;

function Details() {

  return (
    <DivContainer>
      <ContainerTab>
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
      </ContainerTab>
      <ContainerPriceSlick>
        <Slick>
          <SimpleSlider />
        </Slick>
        <Lugares>
          <PriceRoom />
        </Lugares>
      </ContainerPriceSlick>
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
