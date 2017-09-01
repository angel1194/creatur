import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import FormPayment from '../FormPayment';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow} from './style';


class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Container>
          <FlexStart>
            <DivTitle>
              <Title>Tu Carrito de Compras esta vacío</Title>
            </DivTitle>
          </FlexStart>
          <ContainerCart>
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
            <FlexEnd>
              <Link to="/manzanero">
                <LinkA>Añadir reservacion</LinkA>
              </Link>
            </FlexEnd>
          </ContainerCart>
          <FlexRow>
            <DivPay>
              <FormPayment/>
            </DivPay>
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
