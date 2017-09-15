import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import FormPayment from '../FormPayment';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow, ContainerItem} from './style';
import initialState from '../state';
import Itemcar from '../Itemcar';
import HotelSummary from './HotelSummary'

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.carState
  }

  render() {
    let car = this.props.car
    let cart = Object.keys(car.items)
    let checkin = parseInt(this.state.checkin)
    let checkout = parseInt(this.state.checkout)
    let count = checkout - checkin

    return (
      <div>
        <Container>
          <FlexStart>
            <DivTitle>
              <Title>¡Excelente elección!</Title>
            </DivTitle>
          </FlexStart>
          <FlexRow>
            <DivPay>
              <FormPayment total={car.total}/>
            </DivPay>
            {cart.map((item, i)=><HotelSummary
                                    key={i}
                                    elements={car.items[item]}
                                    item={this.state.hotels}
                                    checkin={this.state.checkin}
                                    checkout={this.state.checkout}
                                    count={count}
                                  />
            )}
          </FlexRow>
        </Container>
      </div>
    );
  }
}

export default ShoppingCart;
