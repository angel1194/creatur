/**
*
* FormHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonFormSearch from '../ButtonFormSearch';
import DatePickerForm from '../../DatePickerForm'
import TicketForm from '../TicketForm';
import DateForm from '../DateForm';
import Cama from './cama.png';

class FormHotel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id='inputSearchDisplay'>
        <div className='ui form'>
          <Header as='h1' className='titleFormHotel'>{this.props.title}</Header>
          <Grid>
            <div className='containerFormHotel'>
             {/*FORM LOCATION */}
              <SearchForm />
              <div className='searchMap'>
                <div>
                  <a id='search' href=''>
                    <i className='fa fa-search fa-lg' aria-hidden='true'>
                    </i> Buscar en Mapa
                  </a>
                </div>
              </div>
             {/*FECHA */}
             <div className='dad-datesHotel'>
               <div className='datesHotel'>
                 <label htmlFor="checkin" className='fecha'>Fecha de llegada</label>
                 <DateForm/>
                 <label htmlFor="checkout" className='fecha'>Fecha de salida</label>
                 <DateForm/>

               </div>
               <div className="bedHotel">
                 <img src={Cama}/>
                 <h4>4 noches</h4>
               </div>
             </div>
           </div>

          {/*HUESPEDES*/}

          <div >
            <div className="dad-reservHotel">
              <div className="childHotel">
                <label htmlFor=''>Habitaciones</label>
                <input className="inputs" type="number" min="0" placeholder="0"/>
              </div>
              <div className="childHotel">
                <label htmlFor=''>Adultos</label>
                <input className="inputs" type="number" min="0" placeholder="0"/>
              </div>
              <div className="childHotel">
                <label htmlFor=''>Niños (0-7)</label>
                <input className="inputs" type="number" max="2" placeholder="0"/>
              </div>
            </div>
          </div>

          {/*ANADIR OTRA HABITACION*/}
          <div className='linkHotel'>
            <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
            <a href="#">Añadir otra habitación</a>
          </div>
         {/*BOTON BUSQUEDA*/}
           <Grid.Row centered className='divButtonCar'>
            <ButtonFormSearch/>
           </Grid.Row>
       </Grid>
      </div>
     </div>
    );
  }
}

FormHotel.propTypes = {

};

export default FormHotel;
