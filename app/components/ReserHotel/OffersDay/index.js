/**
*
* OffersDay
*
*/

import React, {PropTypes} from 'react';
import Subtitle from '../Subtitle'
import styled from 'styled-components';
import AddButton from '../../AddButton';
import AddCheckList from '../../AddCheckList';
import FontAwesome from 'react-fontawesome';
import Checkbox from '../../Checkbox';

const Div = styled.div`
  width:100%;
  padding: 10px 40px 20px 40px;
`;

const Row = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div `
  display: flex;
  flex-direction: column;
`;

const Price = styled.div`
  border: 1px solid #EAEFF3;
  border-radius: 5px;
  text-align: center;
  margin: 0px 0px 12px 0px;
`

const Reg = styled.div`
  font-size: 12px;
  margin-left: 22px;
`

function OffersDay(props) {
let texts = [];
let prices = [];
  for (var i = 0; i < props.ArrRoom.length; i++) {

    texts.push(
      <div>
      <AddCheckList id={props.ArrRoom[i].id} text={props.ArrRoom[i].room +" Hasta "+props.ArrRoom[i].occupancy+" Personas"}/>
      <Reg><Subtitle GlobalText={"Regimen: " + props.ArrRoom[i].board}/></Reg>
      </div>
    );
    prices.push(
      <Price>
        <Subtitle GlobalText={"desde $"+props.ArrRoom[i].price}/>
      </Price>
    );

  }
  return (
    <Div>
      <Row>
        <div>
          {texts}
        </div>
        <div>
          {prices}
        </div>
        <div>
          <Row>
            <AddButton text="habitaciones"/>
          </Row>
        </div>
      </Row>
    </Div>
  );
}

OffersDay.propTypes = {
  ArrRoom:PropTypes.array
};

export default OffersDay;
