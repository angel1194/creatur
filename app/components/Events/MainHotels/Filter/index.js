import React from 'react';
import styled, { css } from 'styled-components';
import DualRangeSlider from './DualRangeSlider';
import Title from './Title';
import CollapseSection from './CollapseSection';

const WP = styled.div`
  margin:10px;
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
      <Title Title="Filtrar Resultados"/>
      <WP>
        <DualRangeSlider TitleStar="Número de estrellas" TitlePrice="Precio por noche"/>
      </WP>
    </DivBorder>

  );
}

export default Filter;
