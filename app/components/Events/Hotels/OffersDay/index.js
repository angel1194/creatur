import React, { PropTypes } from 'react';
import Subtitle from '../../../ReserHotel/Subtitle'
import styled from 'styled-components';
import AddButton from '../../../AddButton';
import AddCheckList from '../../../AddCheckList';
import {Div, Row, Column, Price, Reg, WrapperTrans} from './style'

function OffersDay(props) {
  let rooms = props.rooms

  return (
    <WrapperTrans>
      <Div>
        <AddButton text="habitaciones" setShowRooms={()=>props.setShowRooms()} state={props.state}/>
        {props.state === false ? '' :
          Object.keys(rooms).map((item, i)=>
          <Row key={i}>
            <Column>
              <AddCheckList id={rooms[item].idHotel+i} text={rooms[item].description}/>
              <Reg>
                <Subtitle GlobalText={"Regimen: SOLO HABITACION"}/>
              </Reg>
            </Column>
            <Price>
              <Subtitle GlobalText={"desde "+rooms[item].price+" MXN"}/>
            </Price>
          </Row>
          )
        }
      </Div>
    </WrapperTrans>
  );
}

export default OffersDay;
