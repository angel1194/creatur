import React, { PropTypes } from 'react';
import Subtitle from '../../../ReserHotel/Subtitle'
import styled from 'styled-components';
import AddButton from '../../../AddButton';
import AddCheckList from '../../../AddCheckList';
import {Div, Row, Column, Price, Reg, WrapperTrans} from './style'

function OffersDay(props) {
  let state = props.elements
  const test = Object.keys(state).map((item,i)=>console.log(state[item]))

  return (
    <WrapperTrans>
      {console.log(test)}
      <Div>
        <AddButton text="habitaciones" setShowRooms={()=>props.setShowRooms()} state={props.state}/>
        {props.state === false ? '' :
        <Row>
          <Column>
            <AddCheckList id={'1'} text={test.room0}/>
            <Reg>
              <Subtitle GlobalText={"Regimen: SOLO HABITACION"} />
            </Reg>
          </Column>
          <Price>
            <Subtitle GlobalText={"desde $"}/>
          </Price>
        </Row>
        }
      </Div>
    </WrapperTrans>
  );
}

export default OffersDay;
