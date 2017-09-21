import React from 'react';
import {Div, Container, style, MapConcierto, Ticket, Search, THeader, TBody, BoletoRes, Count, P, Row, Pay, Buy} from './style';

class FormEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      price: this.props.price,
      seccion: this.props.seccion
    }
    this.setSeccion = this.setSeccion.bind(this)
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
  					min = 0;
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

  }

  render(){
    return(
      <Div>
        <Container>
          <div style={style.container}>
            <label style={style.label}>CANTIDAD</label>
            <select style={style.select1}>
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
              {/* <option>1</option> */}
            </select>
            {/* <input style={style.select2} value="Boleto Normal" readOnly/> */}
          </div>
          <div style={style.container}>
            <label style={style.label}>PRECIO/SECCIÓN</label>
            <select style={style.select3} onChange={this.setSeccion} ref='price'>
              <option>MXN $1250.00 - Seccion A</option>
              <option>MXN $890.00 - Seccion B</option>
              <option>MXN $395.00 - Seccion C</option>
            </select>
            {/* <input style={style.select3} value="MXN $1250.00" readOnly/> */}
          </div>
          <button style={style.button} onClick={()=>console.log('click')}>Buscar Boletos</button>
        </Container>
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
                <Buy>comprar</Buy>
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
