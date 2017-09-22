import React from 'react';
import {Div, style, MapConcierto, Ticket, Search, THeader, TBody, BoletoRes, Count, P, Row, Pay, Buy, Price} from './style';

class FormEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tickets:{}
    }
    this.request = this.request.bind(this)
  }

  setTime(){
    let min = 1;
    let seg = 30;

    let segundo = document.getElementById("segundos");
		let minuto = document.getElementById("minutos");

		let cron = setInterval(
			function(){
				if(seg === 0){
  					seg = 60;
  					min = '00';
  					minuto.innerHTML = min;
				}
        segundo.innerHTML = seg;
				seg --;
			}
			,1000);
  }

  request(event){
   event.preventDefault()

   let quantity = this.refs.quantity.value
   let seccion = this.refs.seccion.value

   let ticket = this.props.searchTicket(seccion, quantity)

   this.setState({
     tickets:ticket
   })
   this.setTime()
  }

  render(){
    let options = this.props.ticketOptions
    let tickets = this.props.searchTicket
    let state = this.state.tickets
    let keyState = Object.keys(state)
    console.log(keyState);

    return(
      <Div>
        <form style={style.form} onSubmit={this.request}>
          <div style={style.container}>
            <label style={style.label}>CANTIDAD</label>
            <select style={style.select1} ref='quantity'>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
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
                  <Count><span id="minutos">01</span>:<span id="segundos">30</span></Count>
                </Row>
                <p>Seccion {keyState.length >= 1 ? state[keyState].section : ''}</p>
                <P>Fila SS, Asientos: {keyState.map((item, i)=><p key={i}>{state[item].seat + ", "}</p>)}</P>
                <Pay>
                  <Price>MXN ${keyState.length >= 1 ? state[keyState].price : ''} c/u</Price>
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
