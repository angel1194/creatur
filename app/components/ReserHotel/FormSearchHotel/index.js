/**
*
* FormSearchHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import {Form, Grid, Input, Button, Header, Checkbox, Divider} from 'semantic-ui-react'
import FormAutocomplete from '../../../components/FormAutocomplete'
import { Link } from 'react-router'
import ButtonSearch from '../../../components/ButtonSearch'
import Cama from './cama.png';
// const Body = styled.div`
//   background: black;
//   width: 400px;
//   height: 300px;
// `


function FormSearchHotel(props) {
  return (
    <div id="inputSearchDisplay">
      <div className='ui form' >
        <Header as='h1' className='titleForm'>{props.title}</Header>
        <Grid>
          <div className='containerFormHotel'>
            <FormAutocomplete placeholder='Destino, hotel, lugar de interés'/>
            <div className='searchMap'>
              <div>
                <a id='search' href=''>
                  <i className='fa fa-search fa-lg' aria-hidden='true'>
                  </i> Buscar en Mapa
                </a>
              </div>
            </div>
            <div className="dad-dates">
              <div className="dates">
                <label className="fecha">Fecha de llegada</label>
                <ul>
                  <li><i className="fa fa-calendar fa-lg" aria-hidden="true"></i></li>
                  <li><input type="text" placeholder="12/Ene/2016"/></li>
                </ul>
                <label className="fecha">Fecha de salida</label>
                <ul>
                  <li><i className="fa fa-calendar fa-lg" aria-hidden="true"></i></li>
                  <li><input type="text" placeholder="12/Ene/2016"/></li>
                </ul>
              </div>
              <div className="bed">
                <img src={Cama}/>
                <h4>4 noches</h4>
              </div>
            </div>
            <div className="dad-reserv">
              <div className="child">
                <label htmlFor="">Habitaciones</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
              <div className="child">
                <label htmlFor="">Adultos</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
              <div className="child">
                <label htmlFor="">Ninos (0-7)</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
            </div>
            <div className="edad">
              <p>Edad de los menores</p>
            </div>
            <div className="section-dad">
              <div className="section-child">
                <label htmlFor="">Menor 1</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
              <div className="section-child">
                <label htmlFor="">Menor 2</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
            </div>
            <div className="link">
              <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
              <a href="#">Añadir otra habitación</a>
            </div>
            <Grid.Row centered className='divButtonGreeen'>
              <ButtonSearch typeSearch='hotel'/>
            </Grid.Row>
        </div>
        </Grid>
      </div>
    </div>
  );
}

FormSearchHotel.propTypes = {

};

export default FormSearchHotel;
