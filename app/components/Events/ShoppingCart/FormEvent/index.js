import React from 'react';
import {Div, Container, style} from './style';

class FormEvent extends React.Component{
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
            <select style={style.select2}>
              <option>Boleto Normal</option>
              <option>1</option>
            </select>
            <input style={style.select2} value="Boleto Normal" readOnly/>
          </div>
          <div style={style.container}>
            <label style={style.label}>PRECIO/SECCIÓN</label>
            <select style={style.select3}>
              <option>Mejor lugar disponible</option>
              <option>1</option>
            </select>
            <input style={style.select3} value="MXN $1250.00" readOnly/>
          </div>
          <button style={style.button}>Buscar Boletos</button>
        </Container>
        <h1>hola</h1>
      </Div>
    )
  }
}

export default FormEvent;
