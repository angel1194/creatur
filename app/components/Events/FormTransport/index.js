import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonFormSearch from '../ButtonFormSearch';
import DatePickerForm from '../../DatePickerForm'
import TimeForm from '../TimeForm';
import TicketForm from '../TicketForm';
import DateForm from '../DateForm';

class FormTransport extends React.PureComponent {
  constructor(props){
    super(props);
      this.state = {
        startDate:moment()
      }
      this.handleChange= this.handleChange.bind(this);
    }

  handleChange(date){
    this.setState({
      startDate:date
    })
  }

  render() {
    return (
      <div id='inputSearchDisplay'>
        <div className='ui form'>
          <Header as='h1' className='titleForm'>{this.props.title}</Header>
          <Grid>
            <div className='containerFormHotel'>
             {/*FORM SALIDA */}

              <label htmlFor="checkin" className='salida'>Salida</label>
              <SearchForm value='SIGLO XXI'/>

             {/*FECHA Y HORA  */}
            <div className='dateAndTime'>
             <label htmlFor="checkin" className='fecha'>Fecha</label>
             <label htmlFor="" className='hora'>Hora</label>
            </div>

            <div className='formsDateTime'>
              <Grid className='gridAutocompleteForm'>
               <div className='gridCenterDate'>
                <div className='selectFormSearch'>
                  <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
                  <DatePicker selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}/>
                </div>
              </div>
             </Grid>
              <Grid className='gridAutocompleteForm'>
               <div className='gridCenterTime'>
                <div className='selectFormSearch'>
                  <input type="time" className='inputTime' />
                </div>
               </div>
             </Grid>
            </div>
           </div>
          {/*BOLETOS*/}
           <div className="ticket">
            <label htmlFor='boletos' className='fecha'>Boletos</label>
            <div className='selectFormSearchTransport'>
              <span className="input-group-addon-standar"><i className='fa fa-ticket'></i></span>
              <input type="number" min="0" placeholder="0" />
            </div>
           </div>
         {/*BOTON BUSQUEDA*/}
           <Grid.Row centered className='divButtonCar'>
            <ButtonFormSearch title="AGREGAR AL CARRITO"/>
           </Grid.Row>
       </Grid>
      </div>
     </div>
    );
  }
}

FormTransport.propTypes = {

};

export default FormTransport;
