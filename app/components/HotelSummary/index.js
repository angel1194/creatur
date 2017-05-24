/**
*
* HotelSummary
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:23%;
  max-height:400px;
  border:1px solid #eaeff3;
`;

const Header=styled.div`
  height:55px;
  background-color:#2b5bac;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Title=styled.label`
  font-family:Montserrat;
  font-size:18px;
  color:white;
`;

const Line = styled.div`
  width:80%;
  height:1px;
  border:1px solid #5882FA;
  margin-top:5px;
`;

function HotelSummary() {
  return (
    <Container>
      <Header>
        <Title>
          Resumen de Viaje
        </Title>
        <Line/>
      </Header>
    </Container>
  );
}

HotelSummary.propTypes = {

};

export default HotelSummary;
