/**
*
* CarCard
*
*/

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width:206px;
  height:176px;
  background:pink;
  margin-right:20px;
`;

const Header = styled.div`
  width:100%;
  height:50px;
`;

function CarCard() {
  return (
    <CardContainer>
    </CardContainer>
  );
}

CarCard.propTypes = {

};

export default CarCard;
