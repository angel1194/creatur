import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Icon from 'react-fontawesome';
import FormPayment from '../FormPayment';
import HotelSummary from './HotelSummary';
import TransportSummary from './TransportSummary';
import FormEvent from './FormEvent';
import firebase from '../../../containers/Events/Firebase';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow, ContainerItem, ButtonEvent} from './style';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.carState, {showEvent: false, option: '', section: ''}

    this.showEvent = this.showEvent.bind(this)
    this.setshowEvent = this.setshowEvent.bind(this)
    this.setCar = this.setCar.bind(this)
  }

  showEvent(){
    this.test()
    this.setState({
      showEvent: true
    })
    console.log('hola');
  }

  test(){
      Object.keys(this.state.ticketEvents).map((item,i)=>firebase.database().ref().child('temp').child(item).remove())
  }

  setshowEvent(){
    this.setState({
      showEvent: false
    })
  }

  setCar(option, section, tickets){
    const {car} = this.state
    let ticket = Object.keys(tickets)
    let price = option[section].price
    let total = car.total + (price * ticket.length)
    car['total'] = total
    this.setState(car)
    this.setState({
      option:option,
      section:section
    })
  }

  render() {
    let car = this.props.car
    // let cart = Object.keys(car.room)
    let checkin = parseInt(this.state.checkin)
    let checkout = parseInt(this.state.checkout)
    let count = checkout - checkin
    let ubicacion = this.props.ubicacion

    return (
      <div>
        <Container>
          <FlexStart>
            {this.props.ticketOptions === undefined ?
              <ButtonEvent>
                <Title> ¡Tickets "Concierto Manzanero" Agotados!</Title>
              </ButtonEvent>
            :
              <ButtonEvent onClick={this.state.showEvent === false ? this.showEvent : this.setshowEvent}>
                <Title><Icon name={this.state.showEvent === false ? "minus-circle" : "plus-circle"}/> ¡Comprar ticket "Concierto Manzanero"!</Title>
              </ButtonEvent>
            }
          </FlexStart>
          {this.state.showEvent === false ? <FormEvent showEvent={this.showEvent} setCar={this.setCar} searchTicket={this.props.searchTicket} ticketOptions={this.props.ticketOptions} state={this.state}/> : ''}
          <FlexRow>
            <DivPay>
              <FormPayment idSales={this.props.idSales} total={car.total} car={car} ubicacion={this.state.ubicacion}/>
            </DivPay>
            {ubicacion === 'transport' ?
            <TransportSummary
              car={car}
              option={this.state.option}
              section={this.state.section}
              carObject={this.props.carObject}
              seating={this.props.seating}
              price={this.props.price}
            />
          :
            <HotelSummary
              elements={car.room}
              item={this.state.hotels}
              checkin={this.state.checkin}
              checkout={this.state.checkout}
              count={count}
              car={car}
              option={this.state.option}
              section={this.state.section}
            />
          }
          </FlexRow>
        </Container>
      </div>
    );
  }
}

export default ShoppingCart;
