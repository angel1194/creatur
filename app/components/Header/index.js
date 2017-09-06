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
import InicialState from '../Events/state';


class Header extends React.Component {
  constructor(){
    super();
    this.state = InicialState
  }

  render(){
    const {car} = this.state
    let count = Object.keys(car.items)

    return(
      <header className="header">
        <Container>
          {/* <Navigation cart="Mi Carrito" count={count.length} icon="shopping-cart"/> */}
          <Navigation service="Servicio" reserv="Mi reserva" travel="Mi Viaje" login="Inicia Sesion"/>
        </Container>
      </header>
    )
  }
}

Header.propTypes = {

};

export default Header;
