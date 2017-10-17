import React from 'react';
import styled from 'styled-components';
import IconLabel from '../IconLabel';
import {Link} from 'react-router';

const ContainerNav = styled.div`
  width:14%;
  height:700px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  border-right:1px solid #ccc;
  background-color: #fff;
`;

/*Componentes del header del nav lateral*/
const Header = styled.div`
  width:100%;
  height:80px;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-bottom:2px solid #009EFF;
`;

const Logo= styled.img`
  width:100%;
`;

/*Componentes del body */
const Body = styled.div`
  width:100%;
  height:500px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const linkStyle ={
  width:'90%'
}


function NavEvent(props)  {
  console.log('en algun punto');
  return (
      <ContainerNav>
        <Body>
          <Link style={linkStyle} ><IconLabel Text='Hotel' Icon='building'  /></Link>
          <Link style={linkStyle} to='manzanero/admin'><IconLabel Text='Transporte' Icon='car' /></Link>
          <Link style={linkStyle} to='#'><IconLabel Text='Tickets' Icon='ticket'  /></Link>
          <Link style={linkStyle} to='#'><IconLabel Text='Sales' Icon='history' /></Link>
        </Body>
      </ContainerNav>
  );
}


export default NavEvent;
