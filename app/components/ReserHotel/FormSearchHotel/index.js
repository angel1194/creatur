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
            <FormAutocomplete placeholder='Buscar Hotel....'/>
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
                  <li><input className="inputt" type="text" placeholder=" dd/mm/aa"/></li>
                </ul>
                <label className="fecha">Fecha de salida</label>
                <ul>
                  <li><i className="fa fa-calendar fa-lg" aria-hidden="true"></i></li>
                  <li><input className="inputt" type="text" placeholder=" dd/mm/aa"/></li>
                </ul>
              </div>
              <div className="bed">
                <i className="fa fa-bed fa-2x" aria-hidden="true"></i>
                <h4>4 noches</h4>
              </div>
            </div>
            <div className="dad-reserv">
              <div className="child">
                <label for="">Habitaciones</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
              <div className="child">
                <label for="">Adultos</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
              <div className="child">
                <label for="">Ninos (0-7)</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
            </div>
            <div className="edad">
              <h4>Edad de los menores</h4>
            </div>
            <div className="section-dad">
              <div className="section-child">
                <label for="">Menor 1</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
              <div className="section-child">
                <label for="">Menor 2</label>
                <input className="inputs" type="number" placeholder="10"/>
              </div>
            </div>
            <div className="link">
              <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i>Anadir otra habitacion</a>
            </div>
            <Grid.Row centered className='divButtonGreeen'>
              <Button className="buttonGreen" onClick={props.loadingTrue}><Link to='/results'>BUSCAR EL MEJOR PRECIO!</Link></Button>
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
