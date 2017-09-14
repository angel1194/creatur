import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import FormPayment from '../FormPayment';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow, ContainerItem} from './style';
import initialState from '../state';
import Itemcar from '../Itemcar';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.carState

    this.removeRooms = this. removeRooms.bind(this)
  }

  removeRooms(item){
    this.subtractTotalAmount(item)
    const {car} = this.state
    delete car.items[item]
    this.setState(car)
  }

  subtractTotalAmount(item){
    const {car} = this.state
    let price = Number(car.items[item].price)
    let total = car['total'] - price
    car['total'] = total

    this.setState(car)
  }


  render() {
    let car = this.props.car
    let cart = Object.keys(car.items)

    return (
      <div>
        <Container>
          <FlexStart>
            <DivTitle>
              <Title>{cart.length === 0 ? 'Aun no has hecho una reservacion' : 'Mis reservaciones'}</Title>
            </DivTitle>
          </FlexStart>
          <ContainerCart>
            {cart.length === 0 ?
              <div>
                <Subtitle>- Sugerencias.</Subtitle>
                <Subtitle>Para realizar una reservacion, empieza por buscar los hoteles disponibles en la fecha
                  seleccionada de llegada y salida, puede comparar las habitaciones disponibles de cada hotel.
                  Cuando encuentre algo que le agrade, da clic al botón...</Subtitle><br/>
                  <ContainerButtonGreen>
                    <ButtonGreen>
                      Reservar
                    <Space name='shopping-cart' />
                    </ButtonGreen>
                  </ContainerButtonGreen>
              </div>
            :
              <ContainerItem>
                {cart.map((item, i)=><Itemcar
                                      key={i} id={'checked'+i}
                                      elements={car.items[item]}
                                      removeRooms={this.removeRooms}
                                      item={this.state.hotels}
                                      checkin={this.state.checkin}
                                      checkout={this.state.checkout}
                                    />
                )}
              </ContainerItem>
            }
            <FlexEnd>
              <LinkA onClick={this.props.location}>Nueva busqueda</LinkA>
            </FlexEnd>
          </ContainerCart>
          <FlexRow>
            <DivPay>
              {cart.length >= 1 ? <FormPayment total={car.total}/> : ''}
            </DivPay>
            <DivTitle>
              <Title>Total ${car.total*4} MXN</Title>
            </DivTitle>
          </FlexRow>
        </Container>
      </div>
    );
  }
}

export default ShoppingCart;
