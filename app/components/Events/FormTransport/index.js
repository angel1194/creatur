import React from 'react';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonFormSearch from '../ButtonFormSearch';

class FormTransport extends React.PureComponent {
  constructor(props){
    super(props);
      this.state = {
        startDate:moment("2017-09-16")
      }
      this.request=this.request.bind(this);
    }

  request(event){
    event.preventDefault()

    let tickets = this.refs.tickets.value

    console.log(tickets);
  }

  render() {
    return (
      <form id='inputSearchDisplay' onSubmit={this.request}>
        <div>
          <div className='ui form'>
            <Header as='h1' className='titleForm'>{this.props.title}</Header>
            <Grid>
              <div className='containerFormHotel'>
                <label htmlFor="checkin" className='salida'></label>
                <SearchForm location='SIGLO XXI'/>
              <div className='dateAndTime'>
               <label htmlFor="checkin" className='fecha'>Fecha</label>
               <label htmlFor="" className='hora'>Hora</label>
              </div>
              <div className='formsDateTime'>
                <Grid className='gridAutocompleteForm'>
                 <div className='gridCenterDate'>
                  <div className='selectFormSearch'>
                    <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
                    <input type="text" value="10/10/2017" readOnly/>
                  </div>
                </div>
               </Grid>
                <Grid className='gridAutocompleteForm'>
                 <div className='gridCenterTime'>
                  <div className='selectFormSearch'>
                    <input type="text" value="10:30 am" className='inputTime' readOnly/>
                  </div>
                 </div>
               </Grid>
              </div>
             </div>
             <div className="price">
              <label htmlFor='price-label' className='fecha'>Precio</label>
              <div className='price-transport'>
                <span className="input-group-addon-standar"><i className='fa fa-money'></i></span>
                <input type="text" min="0" value="$100.00 c/u" readOnly/>
              </div>
             </div>
             <div className="ticket">
              <label htmlFor='boletos' className='fecha'>Asientos</label>
              <div className='selectFormSearchTransport'>
                <span className="input-group-addon-standar"><i className='fa fa-ticket'></i></span>
                <input type="number" min="0" placeholder="0" ref='tickets'/>
              </div>
             </div>
             <Grid.Row centered className='divButtonCar'>
              <ButtonFormSearch title="Agregar a la Reservacion"/>
             </Grid.Row>
         </Grid>
        </div>
      </div>
    </form>
    );
  }
}

export default FormTransport;
