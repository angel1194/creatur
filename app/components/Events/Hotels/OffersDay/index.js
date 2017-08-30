import React, { PropTypes } from 'react';
import Subtitle from '../../../ReserHotel/Subtitle'
import styled from 'styled-components';
import AddButton from '../../../AddButton';
import AddCheckList from '../../../AddCheckList';
import {Div, Row, Column, Price, Reg, WrapperTrans} from './style'

function OffersDay(props) {
  let stateNight = Object.keys(props.elements)

  return (
    <WrapperTrans>
      {console.log(stateNight[1])}
      <Div>
        <AddButton text="habitaciones" setShowRooms={()=>props.setShowRooms()} state={props.state}/>
        {props.state === false ? '' :
        <Row>
          <Column>
            <AddCheckList id={'1'} text={'DOBLE STANDARD'} />
            <Reg>
              <Subtitle GlobalText={"Regimen: SOLO HABITACION"} />
            </Reg>
          </Column>
          <Price>
            <Subtitle GlobalText={"desde $345"} />
          </Price>
        </Row>
        }
      </Div>
    </WrapperTrans>
  );
}

export default OffersDay;
