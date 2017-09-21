import React from 'react';
import {Div, style, MapConcierto, Ticket, Search, THeader, TBody, BoletoRes, Count, P, Row, Pay, Buy} from './style';

class FormEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      price: this.props.price,
      seccion: this.props.seccion
    }
    this.setSeccion = this.setSeccion.bind(this)
    this.request = this.request.bind(this)
  }

  componentDidMount(){
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

  setSeccion(){
    const state = this.state
    let value = this.refs.price.value.split('-')

    this.setState({
      seccion: value[1],
      price:value[0]
    })
  }

  request(event){
   event.preventDefault()

   let quantity = this.refs.quantity.value
   let price = this.refs.price.value

   console.log(quantity);
   console.log(price);
   let test = this.props.searchTicket(price, quantity)
   console.log(test);
  }

  render(){
    let options = this.props.ticketOptions
    let tickets = this.props.searchTicket

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
            <select style={style.select3} ref='price' onChange={this.setSeccion}>
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
          <Ticket>
            <THeader>Mejor lugar disponible</THeader>
            <TBody>
              <Row>
                <BoletoRes>Tiempo de compra:</BoletoRes>
                <Count><span id="minutos">01</span>:<span id="segundos">30</span></Count>
              </Row>
              <p>{this.state.seccion}</p>
              <P>Fila SS, Asientos 19-20</P>
              <Pay>
                <p>{this.state.price} c/u</p>
                <Buy onClick={()=>console.log('comprar')}>comprar</Buy>
              </Pay>
            </TBody>
          </Ticket>
          <MapConcierto>Mapa del concierto</MapConcierto>
        </Search>
      </Div>
    )
  }
}

export default FormEvent;
