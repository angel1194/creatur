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
             <div className='SearchFormSalida'>
              <label htmlFor="checkin" className='salida'>SALIDA</label>
              <SearchForm />
             </div>
             {/*FECHA Y HORA  */}
            <div className='dateAndTime'>
             <label htmlFor="checkin" className='fecha'>FECHA</label>
             <label htmlFor="" className='hora'>HORA</label>
            </div>

            <div className='formsDateTime'>
              <DateForm />
              <TimeForm />
            </div>
           </div>
          {/*BOLETOS*/}
           <div className="ticket">
            <label htmlFor='boletos' className='boletos'>BOLETOS</label>
            <TicketForm />
           </div>
         {/*BOTON BUSQUEDA*/}
           <Grid.Row centered className='divButtonGreeen'>
            <ButtonFormSearch/>
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
