import React from 'react';
import FontAwesome from 'react-fontawesome';
import MainEvents from '../MainEvents';
import HotelsManzanero from '../../../containers/Events/Hotels'
import Rooms from '../../../containers/Events/Rooms';
import ShoppingCart from '../ShoppingCart';
import {Ul, Li, Div, Car, Count} from './style';
import initialState from '../state'

class Trailcrumb extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState
  }

  render(){
    const {car} = this.state
    let count = Object.keys(car.items)
    return (
      <Div>
        <Ul>
          <Li onClick={()=> this.props.location(<MainEvents location={()=>this.props.location(<HotelsManzanero location={this.props.location}/>, 2)}/>, 1)}>
            Inicio
          </Li>
          {this.props.nameContainer >= 2 ?
            <Li onClick={()=> this.props.location(<HotelsManzanero location={this.props.location}/>, 2)}>
               <FontAwesome name='angle-double-right'></FontAwesome> Hoteles
            </Li>
          : ''}
          {this.props.nameContainer === 3 ?
            <Li onClick={()=> this.props.location(<Rooms/>, 3)}>
              <FontAwesome name='angle-double-right'></FontAwesome> Habitaciones
            </Li>
          : ''}
        </Ul>
        <Car onClick={()=> this.props.location(<ShoppingCart location={()=> this.props.location(<MainEvents location={()=>this.props.location(<HotelsManzanero location={this.props.location}/>, 2)}/>, 1)}/>)}>
          Mi Carrito <FontAwesome name='shopping-cart'></FontAwesome>
        </Car>
        <Count>{count.length}</Count>
      </Div>
    )
  }
}

export default Trailcrumb;