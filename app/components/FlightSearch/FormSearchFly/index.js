/**
*
* FormSearchFly
*
*/

import React from 'react';
/**import styled from 'styled-components';*/
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Grid, Header, Checkbox } from 'semantic-ui-react';
import FormAutocomplete from '../../../components/FormAutocomplete';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router';
import ButtonSearch from '../../../components/ButtonSearch';
import Select from 'react-select';
import  plane from './plane.png';


class FormSearchFly extends React.Component {

    constructor(props){
      super(props)
      this.state= {
         startDate:moment(),
         endDate:moment().add(1,'days'),

      };

      this.handleChange = this.handleChange.bind(this)
      this.handleChangeReturn = this.handleChangeReturn.bind(this)
    }

    handleChange(date){
      this.setState({
        startDate: date
      });

    }

    handleChangeReturn(date){
      this.setState({
        endDate:date
      });

    }

    render(){
      return (
        <div id="inputSearchDisplay" >
          <div className='ui form'>
          <Header as='h1' className='titleForm'>{this.props.title}</Header>
            <Grid>
              <div className='containerFormFly' >
                {/*CHECKBOX VIAJE REDONDO*/}
                <Grid.Row className='checkVuelo'>
                 <Grid.Column width={16}>
                  <Form.Field id='checkLocation'
                      control={Checkbox}
                      onClick={this.showReturn}
                      label={<label className="spanWhite checkboxForm">Vuelo Redondo</label>}/>
                    </Grid.Column>
                    </Grid.Row>

                {/* Input ciudad de origen y Destino*/}
                <FormAutocomplete placeholder='Departure City Code' setLocation={this.props.setLocation} type={this.props.type}/>
                <FormAutocomplete placeholder='Arrival City Code' setLocation={this.props.setLocation} type={this.props.type}/>


                <div className='dad-dates'>
                  <div className='dates'>
                        {/* PICKER Fecha de Salida*/}
                    <label htmlFor='checkin' className='fecha'>Fecha de Salida</label>
                    <ul>
                      <li> <i className='fa fa-calendar fa-lg' aria-hidden='true'></i></li>
                      <li><DatePicker  selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}  showMonthDropdown showYearDropdown dropdownMode='select'/></li>
                    </ul>
                        {/* PICKER Fecha de Regreso*/}
                   <label htmlFor="checkout" className='fecha'>Fecha de Regreso</label>
                   <ul>
                     <li><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></li>
                     <li><DatePicker selected={this.state.endDate} onChange={this.handleChangeReturn} minDate={moment(this.state.startDate)} showMonthDropdown showYearDropdown dropdownMode='select'/></li>
                   </ul>
                  </div>
                  <div className='plane'>
                    <img src={plane} width='60'alt="plane"/>
                  </div>
                </div>
                   {/*PASAJEROS*/}
                <div className='dad-reserv'>
                 <div className='child'>
                  <label htmlFor= 'Adults'>Adultos</label>
                  <input  id='Adultos' type='number' min='0' placeholder='0' className='inputs'/>
                 </div>
                <div className='child'>
                 <label htmlFor= 'children'>Niños</label>
                 <input  id='Adultos' type='number' min='0' placeholder='0' className='inputs'/>
                </div>
               </div>

               <div className='dad-reserv'>
                <div className='child'>
                 <label htmlFor= 'infants'>Infante</label>
                 <input  id='Adultos' type='number' min='0' placeholder='0' className='inputs'/>
                </div>
                <div className='child'>
                 <label htmlFor= 'infantsseat'>Infante con Asiento</label>
                 <input  id='Adultos' type='number' min='0' placeholder='0' className='inputs'/>
                </div>
              </div>

                      {/*BOTON BUSQUEDA*/}
              <Grid.Row centered className='divButtonGreeen'>
                <ButtonSearch typeSearch='fly'/>
              </Grid.Row>
             </div>
            </Grid>
           </div>
          </div>
      );
    }
}


FormSearchFly.propTypes = {

};

export default FormSearchFly;
