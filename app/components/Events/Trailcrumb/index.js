import React from 'react';
import FontAwesome from 'react-fontawesome';
import MainEvents from '../MainEvents';
import MainHotels from '../MainHotels';
import Rooms from '../Rooms';
import ShoppingCart from '../ShoppingCart';
import {Ul, Li, Div, Car, Count} from './style';

class Trailcrumb extends React.Component {

  render(){
    const car = this.props.car
    let count = Object.keys(car.items)
    return (
      <Div>
        <Ul>
          <Li onClick={()=> this.props.location(<MainEvents setHotels={this.props.setHotels} location={()=>this.props.location(<MainHotels location={this.props.location}/>, 2)}/>, 1)}>
            Inicio
          </Li>
          {this.props.nameContainer >= 2 ?
            <Li onClick={()=> this.props.location(<MainHotels hotels={this.props.hotels} addRooms={this.props.addRooms} addComparation={this.props.addComparation} location={this.props.location}/>, 2)}>
               <FontAwesome name='angle-double-right'></FontAwesome> Hoteles
            </Li>
          : ''}
          {this.props.nameContainer === 3 ?
            <Li onClick={()=> this.props.location(<Rooms comparation={this.props.comparation}/>, 3)}>
              <FontAwesome name='angle-double-right'></FontAwesome> Habitaciones
            </Li>
          : ''}
        </Ul>
        <Car onClick={()=> this.props.location(<ShoppingCart
                                                removeRooms={this.props.removeRooms}
                                                car={this.props.car}
                                                carState={this.props.carState}
                                                location={()=> this.props.location(<MainEvents setHotels={this.props.setHotels} location={()=>this.props.location(<MainHotels location={this.props.location}/>, 2)}/>, 1)}/>)}>
          Mi Carrito <FontAwesome name='shopping-cart'></FontAwesome>
        </Car>
        <Count>{count.length}</Count>
      </Div>
    )
  }
}

export default Trailcrumb;
