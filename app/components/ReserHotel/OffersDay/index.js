/**
*
* OffersDay
*
*/

import React, { PropTypes } from 'react';
import Subtitle from '../Subtitle'
import styled from 'styled-components';
import AddButton from '../../AddButton';
import AddCheckList from '../../AddCheckList';
import FontAwesome from 'react-fontawesome';
import Checkbox from '../../Checkbox';

const Div = styled.div`
  width:100%;
  padding: 10px 40px 10px 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RowRight = styled(Row) `

`;

const Column = styled.div`
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

function generateOccupancy(Occupancy) {

  Occupancy = Occupancy.split("/")[0];

  // let jsOCP ={ 
  //   "Adults":Occupancy[0],
  //   "children":Occupancy[1],
  //   "infants":Occupancy[2]
  // };

  return Occupancy;

};

function OffersDay(props) {

  let ArrRooms = props.ArrRoom.map((element, i) => {

    return (
      <Row>
        <Column>
          <AddCheckList id={i} text={element.Room.TextValue + " Hasta " + generateOccupancy(element.Room.Occupancy) + " Personas"} />
          <Reg>
            <Subtitle GlobalText={"Regimen: " + element.Board.TextValue} />
          </Reg>
        </Column>

        <Price>
          <Subtitle GlobalText={"desde $" + element.RatePrice[1].TextValue} />
        </Price>
      </Row>
    );

  });



  return (
    <Div>
      <AddButton text="habitaciones" />
      {ArrRooms[1]}

    </Div>
  );
}

OffersDay.propTypes = {
  ArrRoom: PropTypes.array
};

export default OffersDay;
