import React from 'react';
import {Div, style, MapConcierto, Ticket, Search, THeader, TBody, BoletoRes, Count, P, Row, Pay, Buy, Price} from './style';

class FormEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tickets:{},
      section:'',
      minutes: 1,
      seconds: 40
    }
    this.request = this.request.bind(this)
    this.timer = this.timer.bind(this)
  }

  timer() {
    this.setState({
      seconds: this.state.seconds - 1
    })
    if(this.state.seconds < 1) {
      this.setState({
        minutes: 0
      })
      this.setState({
        seconds: 60
      })
      clearInterval(this.intervalId);
    }
    // else if ((this.state.seconds < 1) && (this.state.minutes < 1)) {
    //   clearInterval(this.intervalId);
    // }
    
  }
  setTimer() {
    this.intervalId = setInterval(this.timer, 1000);
  }
  // componentWillUnmount(){
  //   clearInterval(this.intervalId);
  // }



  request(event){
   event.preventDefault()

   let quantity = this.refs.quantity.value
   let seccion = this.refs.seccion.value

   let ticket = this.props.searchTicket(seccion, quantity)

   this.setState({
     tickets:ticket,
     section:seccion,
   })
   this.setTimer()
  }

  render(){
    let options = this.props.ticketOptions
    let tickets = this.props.searchTicket
    let state = this.state.tickets
    let keyState = Object.keys(state)

    return(
      <Div>
        <form style={style.form} onSubmit={this.request}>
          <div style={style.container}>
            <label style={style.label}>CANTIDAD</label>
            <select style={style.select1} ref='quantity'>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          <div style={style.container}>
            <label style={style.label}>TIPO DE BOLETO</label>
            <select style={style.select2} disabled>
              <option>Boleto Normal</option>
            </select>
          </div>
          <div style={style.container}>
            <label style={style.label}>PRECIO/SECCIÓN</label>
            <select style={style.select3} ref='seccion' onChange={this.setSeccion}>
              {
                Object.keys(options).map((option,i)=>{
                  return(
                    <option key={i} value={option}>{'MXN $'+this.props.ticketOptions[option].price + ' - Seccion ' + option}</option>
                  )
                })
              }
            </select>
          </div>
          <button style={style.button}>Buscar Boletos</button>
        </form>
        <Search>
          {keyState.length >= 1 ?
            <Ticket>
              <THeader>Mejor lugar disponible</THeader>
              <TBody>
                <Row>
                  <BoletoRes>Tiempo de compra:</BoletoRes>
                  <Count><span>0{this.state.minutes}</span>:<span>{this.state.seconds}</span></Count>
                </Row>
                <p>Seccion {this.state.section}</p>
                <P>Fila SS, Asientos: {keyState.map((item, i)=><p key={i}>{state[item].seat + ", "}</p>)}</P>
                <Pay>
                  <Price>MXN ${options[this.state.section].price} c/u</Price>
                  <Buy onClick={()=>console.log('comprar')}>comprar</Buy>
                </Pay>
              </TBody>
            </Ticket>
          : ''}
          <MapConcierto><img src='https://www.eticket.mx/imagenes/Acomodos/2774_COLISEO2774.gif' width='300px'/></MapConcierto>
        </Search>
      </Div>
    )
  }
}

export default FormEvent;
