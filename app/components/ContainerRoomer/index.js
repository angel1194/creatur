/**
*
* ContainerRoomer
*
*/

import React from 'react';
import styled from 'styled-components';
import Tabs from '../../components/ReserHotel/Tabs'
import RoomTitular from '../../components/RoomTitular'
import DataRoomer from '../../components/DataRoomer'
import HotelSummary from '../HotelSummary'
import DataPayment from '../../components/DataPayment'
import BillingPayment from '../../components/BillingPayment'

const Container = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:space-between;
`;

const TitularContainer = styled.div`
  width:75%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify-content:space-between;
`;

function ContainerRoomer() {
  return (
    <Container>
      <TitularContainer>
        <Tabs selected='2'/>
        <RoomTitular/>
        <DataRoomer/>
        {/*<DataPayment />
        <BillingPayment />*/}
      </TitularContainer>
      {/*<HotelSummary/>*/}
    </Container>
  );
}

ContainerRoomer.propTypes = {

};

export default ContainerRoomer;
