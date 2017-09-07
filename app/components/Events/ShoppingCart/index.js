import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import FormPayment from '../FormPayment';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow} from './style';
import initialState from '../state'

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState
  }

  render() {
    const {car} = this.state
    let carLength = Object.keys(car.items)
    return (
      <div>
        <Container>
          <FlexStart>
            <DivTitle>
              <Title>{carLength.length === 0 ? 'Tu Carrito de Compras esta vacío' : 'Tu Carrito de Compras'}</Title>
            </DivTitle>
          </FlexStart>
          <ContainerCart>
            {carLength.length === 0 ?
              <div>
                <Subtitle>- Sugerencias.</Subtitle>
                <Subtitle>Para agregar una reservacion a tu carrito,
                  empieza por buscar y navegar a traves de las reservaciones que desee.
                  Cuando encuentres algo que te guste, da clic al botón...</Subtitle><br/>
                  <ContainerButtonGreen>
                    <ButtonGreen>
                      Añadir al carrito
                    <Space name='shopping-cart' />
                    </ButtonGreen>
                  </ContainerButtonGreen>
              </div>
              : '' }
            <FlexEnd>
              <Link to="/manzanero">
                <LinkA>Nueva busqueda</LinkA>
              </Link>
            </FlexEnd>
          </ContainerCart>
          <FlexRow>
            {carLength.length >= 1 ?
              <DivPay>
                <FormPayment/>
              </DivPay> : ''}
            <DivTitle>
              <Title>Total $0.00</Title>
            </DivTitle>
          </FlexRow>
        </Container>
      </div>
    );
  }
}

export default ShoppingCart;
