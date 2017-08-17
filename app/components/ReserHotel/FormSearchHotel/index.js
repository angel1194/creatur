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
import SearchForm from '../../Events/SearchForm';
import ButtonFormSearch from '../../Events/ButtonFormSearch'

class FormSearchHotel extends React.Component {
  constructor (props) {
    super(props)
    this.state =
    {
      startDate: moment(),
      endDate:moment().add(1, "days"),
      data:[{Room0:{}}]
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeReturn = this.handleChangeReturn.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
    this.props.saveDataHotel([date.format('YYYY-MM-DD'), 'pickUpDataHotel'])
  }

  handleChangeReturn(date) {
    this.setState({
      endDate: date
    })
    this.props.saveDataHotel([date.format('YYYY-MM-DD'), 'returnDataHotel'])
  }

  addRom(){
    var state =  this.state
    var newRoom = {}
    newRoom[Date.now()] = {}
    state.data.push(newRoom)
    this.setState(state)
    console.log(state);
  }

  setRoom(js){
    this.setState({
        data:js
    });
  }

  removeRom(){
    let res = this.state.data
    this.setState({
      data:res
    })
    this.state.data.pop()
    console.log(res);
  }

  render() {
    return (
      <div id="inputSearchDisplay">
      {/* <div id="inputSearchDisplay" onLoad={() => this.addRom()}> */}
        <div className='ui form' >
          <Header as='h1' className='titleForm'>{this.props.title}</Header>
          <Grid>
            <div className='containerFormHotel'>
              {this.props.input ? <SearchForm value='MERIDA'/>:<FormAutocomplete placeholder='Destino, hotel, lugar de interés' setLocation={this.props.setLocation} type={this.props.type}/>}

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
                  <label htmlFor="checkin" className="fecha">Fecha de llegada</label>
                  <ul>
                    <li><i className="fa fa-calendar fa-lg" aria-hidden="true"></i></li>
                    <li><DatePicker id="checkin" saveDataHotel={this.props.saveDataHotel} selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}/></li>
                  </ul>
                  <label htmlFor="checkout" className="fecha">Fecha de salida</label>
                  <ul>
                    <li><i className="fa fa-calendar fa-lg" aria-hidden="true"></i></li>
                    <li><DatePicker id="checkout" saveDataHotel={this.props.saveDataHotel} selected={this.state.endDate} onChange={this.handleChangeReturn} minDate={moment(this.state.startDate)}/></li>
                  </ul>
                </div>
                <div className="bed">
                  <img src={Cama}/>
                  <h4>4 noches</h4>
                </div>
              </div>
              {this.state.data.map((room, i)=><AddRoomForm
                                                room = {room}
                                                key={i}
                                                idFor={i}
                                                res={()=>this.removeRom()}
                                                line={i >= 1 ? true : false}
                                                remove={i >= 1 ? true : false}
                                              />)}
              <div className="link">
                {this.state.data.length <= 2 ? <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> : ''}
                <a onClick={() => this.addRom()}>{this.state.data.length <= 2 ? 'Añadir otra habitación' : ''}</a>
              </div>
              <Grid.Row centered className='divButtonGreeen'>
              {this.props.button ? <ButtonFormSearch/>:  <ButtonSearch  typeSearch='hotel'/>}
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
