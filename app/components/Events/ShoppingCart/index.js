import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import Icon from 'react-fontawesome';
import FormPayment from '../FormPayment';
import HotelSummary from './HotelSummary';
import TransportSummary from './TransportSummary';
import FormEvent from './FormEvent';
import firebase from '../../../containers/Events/Firebase';
import {Title, Subtitle, DivTitle, FlexEnd, FlexStart, LinkA, ContainerCart, ButtonGreen, Space, ContainerButtonGreen,DivPay, FlexRow, ContainerItem, ButtonEvent} from './style';
import { default as Fade } from 'react-fade';


class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state =
    this.props.carState, {showEvent: false, option: '', section: '', fadeOut: false, visibility: 'visible', fadeDuration:1 }

    this.showEvent = this.showEvent.bind(this)
    this.setshowEvent = this.setshowEvent.bind(this)
    this.setCar = this.setCar.bind(this)
    this.removeTicket = this.removeTicket.bind(this)
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

  removeTicket(){
    this.resTotalAmount()
    let tickets = this.state.tickets
    Object.keys(tickets).map((item,i)=>{
      firebase.database().ref().child('temp').child(item).remove()
      firebase.database().ref().child('tickets').child(item).set(tickets[item])
      delete tickets[item]
    })
    this.setState(tickets)
  }

  resTotalAmount(){
    let ubicacion = this.state.ubicacion
    let car =this.state.car
    // transport
    let price = this.props.price
    let seating = this.props.seating
    let totalTransport = price * seating
    // hotel
    let priceHotel = car.room.price
    let totalNight = this.state.totalNight
    let roomsUI = Object.keys(this.state.roomsUI).length
    let totalHotel = (priceHotel * roomsUI) * totalNight

    if (ubicacion === 'transport') {
      car['total'] = totalTransport
      this.setState(car)
    }else {
      car['total'] = totalHotel
      this.setState(car)
    }
  }

  render() {
    let car = this.props.car
    // let cart = Object.keys(car.room)
    let checkin = this.state.checkin
    let checkout = this.state.checkout
    let ubicacion = this.props.ubicacion

    return (
      <div>
        <Container>
          <FlexStart>
            {this.state.tickets === null ?
              <ButtonEvent onClick={()=>alert('No hay tickets disponibles')}>
                <Title><Icon name="plus-circle"/> ¡Comprar ticket "Concierto Manzanero"!</Title>
              </ButtonEvent>
              :
              <ButtonEvent onClick={this.state.showEvent === false ? this.showEvent : this.setshowEvent}>
                <Title><Icon name={this.state.showEvent === false ? "minus-circle" : "plus-circle"}/> ¡Comprar ticket "Concierto Manzanero"!</Title>
              </ButtonEvent>
            }
          </FlexStart>
          {this.state.showEvent === false ?
            <Fade out={this.state.fadeOut} duration={this.state.fadeDuration} style={{visibility: this.state.visibility}}>
              <FormEvent showEvent={this.showEvent} setCar={this.setCar} searchTicket={this.props.searchTicket} ticketOptions={this.props.ticketOptions} state={this.state}/>
            </Fade>
          : ''}
          <FlexRow>
            <DivPay>
              <FormPayment idSales={this.props.idSales} total={car.total} car={car} ubicacion={this.state.ubicacion} roomsUI={this.state.roomsUI}/>
            </DivPay>
            {ubicacion === 'transport' ?
            <TransportSummary
              car={car}
              option={this.state.option}
              section={this.state.section}
              carObject={this.props.carObject}
              seating={this.props.seating}
              price={this.props.price}
              removeTicket={this.removeTicket}
            />
          :
            <HotelSummary
              roomsUI={this.state.roomsUI}
              elements={car.room}
              item={this.state.hotels}
              checkin={this.state.checkin}
              checkout={this.state.checkout}
              count={this.state.totalNight}
              car={car}
              option={this.state.option}
              section={this.state.section}
              removeTicket={this.removeTicket}
            />
          }
          </FlexRow>
        </Container>
      </div>
    );
  }
}

export default ShoppingCart;
