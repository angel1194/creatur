/**
*
* Tabs
*
*/

import React from 'react';
import styled from 'styled-components';
import FlexRow from './StyledT/Row';

const Ul = styled(FlexRow)`
  width: 100%;
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const A = styled.a`
  text-decoration: none;
  border: 1px solid #cdcdcd;
  text-decoration: none;
  color: #2c3e50 !important;
  font-family: Roboto !important;
  padding: 10px 160px  10px 160px;

  &:hover {
    box-shadow: inset 0px -60px 0px #2b5bac;
    transition: 0.8s;
    color: white !important;
  }
`;

function Tabs() {
  return (
      <Ul>
        <li>
          <A href="">Detalles</A>
        </li>
        <li>
          <A href="">Caracteristicas</A>
        </li>
        <li>
          <A href="">Precio</A>
        </li>
      </Ul>
  );
}

Tabs.propTypes = {

};

export default Tabs;
