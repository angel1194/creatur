import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import ButtonFormSearch from '../ButtonFormSearch';
import TicketForm from '../TicketForm';
import DateForm from '../DateForm';
import Cama from './cama.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class FormHotel extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      hotels:{},
      startDate:moment()
    }
    this.request=this.request.bind(this)
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(date){
    this.setState({
      startDate:date
    })
  }

  request(event){
    event.preventDefault()

    let rooms = this.refs.rooms.value
    let adult = this.refs.adult.value
    let child = this.refs.child.value

    console.log(rooms, adult, child);
    // let request = {
    //   checkin:'',
    //   checkout:'',
    //   rooms:{
    //     room:{
    //       key:1,
    //       adult:0,
    //       child:{
    //
    //       }
    //     },
    //   }
    // }
  }

  render() {
    return (
      <div id='inputSearchDisplay'>
        <form onSubmit={this.request}>
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
                   <div className='selectFormSearch'>
                     <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
                     <DatePicker selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}/>
                   </div>
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
                  <input className="inputs" type="number" min="0" placeholder="0" ref='rooms'/>
                </div>
                <div className="childHotel">
                  <label htmlFor=''>Adultos</label>
                  <input className="inputs" type="number" min="0" placeholder="0" ref='adult'/>
                </div>
                <div className="childHotel">
                  <label htmlFor=''>Niños (0-7)</label>
                  <input className="inputs" type="number" max="2" placeholder="0" ref='child'/>
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
        </form>
      </div>
    );
  }
}

FormHotel.propTypes = {

};

export default FormHotel;
