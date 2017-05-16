/**
*
* BarFilters
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import InputLabel from '../../../components/ReserHotel/InputLabel';
import Wrapper from './StyledBarF/StyledBF';

function BarFilters() {
  return (
    <Wrapper>
      <InputLabel Type="text" Title="Destino" Placeholder="Mexico Df" />
      <InputLabel Type="date" Title="Entrada" Placeholder="12/Ene/2017" />
      <InputLabel Type="date" Title="Salida" Placeholder="12/Ene/2017" />
      <InputLabel Type="number" Title="Habitaciones" Placeholder="0" />
      <InputLabel Type="number" Title="Noches" Placeholder="0" />
      <InputLabel Type="number" Title="Adultos" Placeholder="0" />
      <InputLabel Type="number" Title="Niños" Placeholder="0" />


    </Wrapper>
  );
}

BarFilters.propTypes = {

};

export default BarFilters;
