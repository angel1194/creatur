/**
*
* Tabs
*
*/

import React from 'react';
import styled from 'styled-components';
import FlexRow from './StyledT/Row';

const Ul = styled(FlexRow)`
  list-style: none;
  padding: 10px;
`;

const A = styled.a`
  text-decoration: none;
  border: 1px solid #cdcdcd;
  text-decoration: none;
  padding: 10px 145px 10px 145px;
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
