/**
*
* Filter
*
*/

import React from 'react';
import styled, { css } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import DualRangeSlider from '../../../components/ReserHotel/DualRangeSlider';
import Title from '../../../components/ReserHotel/Title';
import Line from '../../../components/ReserHotel/Line';
import CollapseSection from '../../../components/ReserHotel/CollapseSection';

const WP = styled.div`
  margin:15px;
   margin-top:0;
`;

const DivBorder = styled.div`
  border: 2px solid #eaeff3;
  border-radius: 6px;
`;

function Filter() {
  return (
    <DivBorder>
      <Title Title="Filtrar Resultados" />
      <WP>
        <DualRangeSlider Title="Número de estrellas" Step="1" Min="1" Max="5" />
        <Line />
        <DualRangeSlider Title="Precio por noche" Mode="Money" Step="1" Min="1" Max="1000" />
        <Line />
        <DualRangeSlider Title="Calificaciones Tripadvisor" Step="1" Min="1" Max="5" />
        <Line />
        <CollapseSection Title="Tipo de tarifa" SubTitles="Reembolsable" ID="TF1" />
        <Line />
        <CollapseSection Title="Proveedor" SubTitles="Bookhole" ID="PV1" />
        <Line />
        <CollapseSection Title="Plan de Alimentos" SubTitles="Pensión Completa" ID="PA1" />
        <Line />
        <CollapseSection Title="Camas" SubTitles="Individual" ID="C1" />
        <Line />
        <CollapseSection Title="Zona" SubTitles="Cerca del centro" ID="Z1" />
      </WP>
    </DivBorder>

  );
}

Filter.propTypes = {

};

export default Filter;
