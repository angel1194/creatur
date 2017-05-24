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
      <InputLabel Type="text" Title="Destino" Placeholder="Paris Francia" />
      <InputLabel Type="date" Title="Entrada" Placeholder="2017-09-15" />
      <InputLabel Type="date" Title="Salida" Placeholder="2017-09-19" />
      <InputLabel Type="number" Title="Habitaciones" Placeholder="1" />
      <InputLabel Type="number" Title="Noches" Placeholder="4" />
      <InputLabel Type="number" Title="Adultos" Placeholder="2" />
      <InputLabel Type="number" Title="Niños" Placeholder="0" />


    </Wrapper>
  );
}

BarFilters.propTypes = {

};

export default BarFilters;
