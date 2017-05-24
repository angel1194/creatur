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

const Container = styled.div`
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
      <Tabs selected='2'/>
      <RoomTitular/>
      <DataRoomer/>
    </Container>
  );
}

ContainerRoomer.propTypes = {

};

export default ContainerRoomer;
