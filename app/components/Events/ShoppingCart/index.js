import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Icon from 'react-fontawesome';
import FormPayment from '../FormPayment';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow, ContainerItem, ButtonEvent} from './style';
import HotelSummary from './HotelSummary';
import FormEvent from './FormEvent'

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.carState, {showEvent: false}

    this.showEvent = this.showEvent.bind(this)
    this.setshowEvent = this.setshowEvent.bind(this)
  }

  showEvent(){
    this.setState({
      showEvent: true
    })
  }

  setshowEvent(){
    this.setState({
      showEvent: false
    })
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
            <ButtonEvent onClick={this.state.showEvent === false ? this.showEvent : this.setshowEvent}>
              <Title><Icon name={this.state.showEvent === false ? "minus-circle" : "plus-circle"}/> ¡Comprar ticket "Concierto Manzanero"!</Title>
            </ButtonEvent>
          </FlexStart>
          {this.state.showEvent === false ? <FormEvent ticketOptions={this.props.ticketOptions}/> : ''}
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
