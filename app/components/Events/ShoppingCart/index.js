import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen, ContainerItem} from './style';
import Itemcar from '../Itemcar';

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
              Cuando encuentres algo que te guste, da clic al botón...</Subtitle>
             <ContainerItem>
              <Itemcar id='1'/>
               <Itemcar id='2'/>

            </ContainerItem>
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
          <FlexEnd>
            <DivTitle>
              <Title>Total $0.00</Title>
            </DivTitle>
          </FlexEnd>
        </Container>
      </div>
    );
  }
}

export default ShoppingCart;
