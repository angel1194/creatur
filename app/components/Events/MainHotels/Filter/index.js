import React from 'react';
import styled, { css } from 'styled-components';
import DualRangeSlider from './DualRangeSlider';
import Title from './Title';
import Line from './Line';
import CollapseSection from './CollapseSection';

const WP = styled.div`
  margin:15px;
   margin-top:0;
`;

const DivBorder = styled.div`
  border: 2px solid #eaeff3;
  border-radius: 6px;
  margin-top: 15px;
  width: 240px
`;

function Filter() {
  return (
    <DivBorder>
      <Title Title="Filtrar Resultados" />
      <WP>
        <DualRangeSlider Title="Número de estrellas" Step="1" Min="1" Max="5" />
        <Line />
        <DualRangeSlider Title="Precio por noche" Mode="Money" Step="1" Min="1" Max="1000"/>
      </WP>
    </DivBorder>

  );
}

export default Filter;
