/**
*
* HeaderTable
*
*/

import React from 'react';
import styled from 'styled-components';
import H3 from '../ReserHotel/H3'

const Header = styled.div`
  width:80%;
  display:flex;
  flex-wrap:nowrap;
  background-color:#2b5bac;
  height:40px;
  margin-top:20px;
  margin-bottom:20px;
  border-radius: 6px;
`;

const HeaderTitle = styled.div`
  width:33.33%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const Title=styled(H3)`
 color:white !important;
`;

function HeaderTable() {
  return (
    <Header>
      <HeaderTitle>
        <Title>Tipo de habitacion</Title>
      </HeaderTitle>
      <HeaderTitle>
        <Title>Caracteristicas</Title>
      </HeaderTitle>
      <HeaderTitle>
        <Title>Precio</Title>
      </HeaderTitle>
    </Header>
  );
}

HeaderTable.propTypes = {

};

export default HeaderTable;
