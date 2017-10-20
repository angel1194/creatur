import React from 'react';
import {Container} from 'semantic-ui-react';
import HeaderTable from '../../HeaderTable';
import HotelRoom from '../HotelRoom';
import InfoHotel from '../InfoHotel';
import styled from 'styled-components';
import moment from 'moment';

const ContainerRoom = styled(Container)`
  margin-bottom: 60px;
`;

const DivCheck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
 const Check = styled.p`
  font-family: Roboto;
  font-size: 17px;
  color: #5e5e5e;
 `;

class Rooms extends React.Component {

  render() {
    const comparation = this.props.comparation
    const state = this.props.stateAll
    let reser = this.props.stateAll
    console.log(this.props.stateAll);
    return (
      <div>
        <ContainerRoom>
          {Object.keys(comparation).map((item , i)=><InfoHotel key={i} elements={comparation[item]}/>)}
          <DivCheck>
            <Check>Estancia de {reser.totalNight} noches</Check>
            <Check>Entrada: {moment(reser.checkin, 'l').format('ll')}</Check>
            <Check>Salida: {moment(reser.checkout, 'l').format('ll')}</Check>
          </DivCheck>
          <HeaderTable/>
          {Object.keys(comparation).map((item, i)=><HotelRoom key={i} elements={comparation[item]} addRooms={this.props.addRooms} night={state}/>)}
        </ContainerRoom>
      </div>
    );
  }
}

export default Rooms;
