import React from 'react';
import {Nav, Img, Ul, Li} from './style'

function Header(props) {
  return (
    <Nav>
      <Img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png"/>
      <Ul>
        <Li>Mi reserva</Li>
      </Ul>
    </Nav>
  )
}

export default Header;
