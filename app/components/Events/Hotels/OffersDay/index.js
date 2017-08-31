import React, { PropTypes } from 'react';
import Subtitle from '../../../ReserHotel/Subtitle'
import styled from 'styled-components';
import AddButton from '../../../AddButton';
import AddCheckList from '../../../AddCheckList';
import {Div, Row, Column, Price, Reg, WrapperTrans} from './style'

function OffersDay(props) {
  let night = props.night
  let hotels = props.hotels
  let item = props.item

  return (
    <WrapperTrans>
      {console.log(item)}
      <Div>
        <AddButton text="habitaciones" setShowRooms={()=>props.setShowRooms()} state={props.state}/>
        {props.state === false ? '' :
          Object.keys(item).map((items,i)=>
            item[items].id == hotels ?
            <Row>
              <Column>
                <AddCheckList id={'1'} text={item[items].id == hotels  ? item[items].description : ''}/>
                <Reg>
                  <Subtitle GlobalText={"Regimen: SOLO HABITACION"}/>
                </Reg>
              </Column>
              <Price>
                <Subtitle GlobalText={"desde $"+item[items].price}/>
              </Price>
            </Row> : ''
          )
        }
      </Div>
    </WrapperTrans>
  );
}

export default OffersDay;
