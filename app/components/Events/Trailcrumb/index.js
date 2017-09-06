import React from 'react';
import FontAwesome from 'react-fontawesome';
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import Rooms from '../../../containers/Events/Rooms';
import Cart from '../../../containers/Events/Cart';
import {Ul, Li, Div, Car, Count} from './style'

class Trailcrumb extends React.Component {
  render(){
    return (
      <Div>
        <Ul>
          <Li>Inicio</Li>
          <Li><FontAwesome name='angle-double-right'></FontAwesome> Hoteles</Li>
          <Li><FontAwesome name='angle-double-right'></FontAwesome> Reservar</Li>
        </Ul>
        <Car onClick={()=> this.props.location(<Cart/>)}>Mi Carrito <FontAwesome name='shopping-cart'></FontAwesome></Car>
        <Count>{0}</Count>
      </Div>
    )
  }
}

export default Trailcrumb;
