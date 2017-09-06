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
          <Li onClick={()=> this.props.location(<MainEvents location={()=>this.props.location(<HotelsManzanero location={this.props.location}/>, 2)}/>, 1)}>
            Inicio
          </Li>
          {this.props.nameContainer >=2?
            <Li onClick={()=> this.props.location(<HotelsManzanero location={this.props.location}/>, 2)}>
               <FontAwesome name='angle-double-right'></FontAwesome> Hoteles
            </Li>
          : ''}
          {this.props.nameContainer === 3?
            <Li onClick={()=> this.props.location(<Rooms/>, 3)}>
              <FontAwesome name='angle-double-right'></FontAwesome> Habitaciones
            </Li>
          : ''}
        </Ul>
        <Car onClick={()=> this.props.location(<Cart/>)}>Mi Carrito <FontAwesome name='shopping-cart'></FontAwesome></Car>
        <Count>{0}</Count>
      </Div>
    )
  }
}

export default Trailcrumb;
