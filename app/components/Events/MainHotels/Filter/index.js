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
  width: 240px;

  /*Responsive  */
  @media only screen and (max-width: 500px) and (min-width: 412px){
  width: 405px;
  position: relative;
  bottom: 5px;
  }
  @media only screen and (min-width: 720px){
  width: 730px;
  position: relative;
  bottom: 5px;
  margin-left: -9px;
  }

`;

function Filter(props) {
  return (
    <DivBorder>
      <Title Title="Filtrar Resultados"/>
      <WP>
        <DualRangeSlider TitleStar="Número de estrellas" TitlePrice="Precio por noche" star={props.star} price={props.price} setFilterValue={props.setFilterValue}/>
      </WP>
    </DivBorder>

  );
}

export default Filter;
