/**
*
* FormSearchHotel
*
*/

import React, {propTypes} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Form, Grid, Input, Button, Header, Checkbox, Divider} from 'semantic-ui-react'
import FormAutocomplete from '../../../components/FormAutocomplete'
import { Link } from 'react-router'
import ButtonSearch from '../../../components/ButtonSearch'
import Cama from './cama.png';
import InputKids from '../../InputKids'

class FormSearchHotel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate:moment().add(1, "days"),
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeReturn = this.handleChangeReturn.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeReturn(date) {
    this.setState({
      endDate: date
    })
  }

  render() {
    return (
      <div id="inputSearchDisplay">
        <div className='ui form' >
          <Header as='h1' className='titleForm'>Bienvenido</Header>
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
                    <li><DatePicker selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}/></li>

                  </ul>
                  <label className="fecha">Fecha de salida</label>
                  <ul>
                    <li><i className="fa fa-calendar fa-lg" aria-hidden="true"></i></li>
                    <li><DatePicker selected={this.state.endDate} onChange={this.handleChangeReturn} minDate={moment(this.state.startDate)}/></li>
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
                  <input className="inputs" type="number" min="0" placeholder="10"/>
                </div>
                <div className="child">
                  <label htmlFor="">Adultos</label>
                  <input className="inputs" type="number" min="0" placeholder="10"/>
                </div>
                <div className="child">
                  <label htmlFor="">Ninos (0-7)</label>
                  <input className="inputs" type="number" min="0" placeholder="10"/>
                </div>
              </div>
              <div className="edad">
                <p>Edad de los menores</p>
              </div>
              <div className="section-dad">
                <InputKids Menor="1"/>
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
}

FormSearchHotel.propTypes = {

};

export default FormSearchHotel;
