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
  border-left:    1px solid red;
  border-right:  1px solid red; 
  border-bottom: 1px solid red;
  width:100%;
  padding: 5px 20px 20px 20px;
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

function OffersDay() {
  return (
    <Div>
      <Row>
        <div>
          <AddCheckList text="Estandar, 1 cama doble"/>
          <Reg><Subtitle GlobalText="Regimen: Solo Alojamiento, Otra informacion"/></Reg>
          <AddCheckList text="Familiar, hasta 5 personas"/>
          <Reg><Subtitle GlobalText="Regimen: Solo Alojamiento, Otra informacion"/></Reg>
          <AddCheckList text="Cuadruple"/>
          <Reg><Subtitle GlobalText="Regimen: Solo Alojamiento, Otra informacion"/></Reg>
        </div>
        <div>
          <Price>
            <Subtitle GlobalText="desde $800.56"/>
          </Price>
          <Price>
            <Subtitle GlobalText="desde $1000.00"/>
          </Price>
          <Price>
            <Subtitle GlobalText="desde $1200.56"/>
          </Price>
        </div>
        <div>
          <Row>
            <AddButton text="habitacion"/>
          </Row>
        </div>
      </Row>
    </Div>
  );
}

OffersDay.propTypes = {

};

export default OffersDay;
