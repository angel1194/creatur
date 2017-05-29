/**
*
* BarImgOffers
*
*/

import React from 'react';
import styled from 'styled-components';
import BarImage from '../../BarImage';
import BarOffers from '../../BarOffers';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
`

function BarImgOffers() {
  return (
    <Div>
      <BarImage src="http://lorempixel.com/output/city-q-c-200-150-9.jpg" porcent="45%" />
      <DivColumn>
        <BarOffers hours="12:24:09" text="OFERTA DEL DIA"/>
        
      </DivColumn>
    </Div>
  );
}

BarImgOffers.propTypes = {

};

export default BarImgOffers;
