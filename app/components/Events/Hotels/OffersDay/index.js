import React, { PropTypes } from 'react';
import Subtitle from '../../../ReserHotel/Subtitle'
import styled from 'styled-components';
import AddButton from '../../../AddButton';
import AddCheckList from '../../../AddCheckList';
import {Div, Row, Column, Price, Reg, WrapperTrans} from './style'

function OffersDay(props) {
  return (
    <WrapperTrans>
      <Div>
        <AddButton text="habitaciones" setShowRooms={()=>props.setShowRooms()} state={props.state}/>
        {props.state === false ? '' :
        <Row>
          <Column>
            <AddCheckList id={'1'} text={"DOBLE 2 CAMAS STANDARD Hasta 2 Personas"} />
            <Reg>
              <Subtitle GlobalText={"Regimen: SOLO HABITACION"} />
            </Reg>
          </Column>
          <Price>
            <Subtitle GlobalText={"desde $454.72"} />
          </Price>
        </Row>
        }
      </Div>
    </WrapperTrans>
  );
}

export default OffersDay;
