/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import {Container} from 'semantic-ui-react'
import Navigation from '../Navigation'
import { Link } from 'react-router'


function Header(props) {
  return (
    <header className="header">
      <Container>
        <Navigation cart="Mi Carrito" count={0} icon="shopping-cart"/>
        {/* <Navigation service="Servicio" reserv="Mi reserva" travel="Mi Viaje" login="Inicia Sesion"/> */}
      </Container>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
