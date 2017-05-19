/**
*
* HeaderTable
*
*/

import React from 'react';
import styled from 'styled-components';
import H3 from '../../H3'

const Header = styled.div`
  width:100%;
  display:flex;
  flex-wrap:nowrap;
  background-color:#2b5bac;
  height:40px;
  margin-top:20px;
  margin-bottom:20px;
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

function HeadertableDetails() {
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

HeadertableDetails.propTypes = {

};

export default HeadertableDetails;
