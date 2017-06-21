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
import AddRoomForm from '../AddRoomForm';

class FormSearchHotel extends React.Component {
  constructor (props) {
    super(props)
    this.state =
    {
      startDate: moment(),
      endDate:moment().add(1, "days"),
      show: [],
      rooms: 0
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeReturn = this.handleChangeReturn.bind(this)
    this.addRom = this.addRom.bind(this)
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

  addRom(){
    let count = this.state.rooms + 1
    this.setState({
      rooms:count
    })
    this.state.show.push(<AddRoomForm key={'Room'+ this.state.rooms}/>)
    console.log(count);
  }



  render() {
    return (
      <div id="inputSearchDisplay">
        <div className='ui form' >
          <Header as='h1' className='titleForm'>{this.props.title}</Header>
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
              <AddRoomForm/>
              {this.state.show.map(element => element)}
              <div className="link">
                <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                <a onClick={this.addRom}>Añadir otra habitación</a>
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
