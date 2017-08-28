import React, {propTypes} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import ButtonFormSearch from '../ButtonFormSearch';
import Cama from './cama.png';
import AddRoomForm from './AddRoomForm'
import InputKids from './InputKids';

class FormHotel extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      startDate:moment(),
      endDate:moment().add(1, "days"),
      data:{Room0:{adult:0, cuna:0}}
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleChangeEnd= this.handleChangeEnd.bind(this);
    this.deleteRoom=this.deleteRoom.bind(this);
    this.request=this.request.bind(this);
  }

  handleChange(date){
    this.setState({
      startDate:date
    })
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    })
  }

  addRooms(){
    const state = this.state.data
    state[Date.now()] = {adult:0, cuna:0}
    this.setState(state)
  }

 deleteRoom(e){
   const state = this.state.data
   delete state[e]
   this.setState(state)
   console.log(e);
 }

 request(event){
   event.preventDefault()

   let location = document.getElementById('location').value
   let checkin = this.state.startDate.format('YYYY-MM-DD')
   let checkout = this.state.endDate.format('YYYY-MM-DD')
   let rooms = this.state.data
   console.log('evento',event.target.elements['Ninos1'].value);

   let request = {
     location: location,
     checkin: checkin,
     checkout: checkout,
     rooms
   }

   fetch('',{
      method: 'post',
      body: JSON.stringify(request)
    })
    .then((response) => {
      return response.json();
    })
    .then((recurso) => {
      console.log(recurso);
    })
 }

  render() {
    let data = Object.keys(this.state.data)
    const startDate = this.state.startDate.format('DD')
    const endDate = this.state.endDate.format('DD')
    let count = endDate-startDate

    return (
      <div id='inputSearchDisplay'>
        <form onSubmit={this.request}>
          <div className='ui form'>
            <Header as='h1' className='titleFormHotel'>{this.props.title}</Header>
            <Grid>
              <div className='containerFormHotel'>
               {/*FORM LOCATION */}
                <SearchForm location="Merida" idLocation='location'/>
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
                   <Grid className='gridAutocompleteForm'>
                    <div className='gridCenterDate'>
                     <div className='selectFormSearch'>
                       <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
                       <DatePicker
                        //  openToDate={moment("1993-09-28")}
                         selected={this.state.startDate}
                         onChange={this.handleChange}
                         minDate={moment().subtract(3, "days")}
                         maxDate={moment().add(3, "days")}
                       />
                     </div>
                   </div>
                  </Grid>
                   <label htmlFor="checkout" className='fecha'>Fecha de salida</label>
                   <Grid className='gridAutocompleteForm'>
                    <div className='gridCenterDate'>
                     <div className='selectFormSearch'>
                       <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
                       <DatePicker
                         selected={this.state.endDate}
                         onChange={this.handleChangeEnd}
                         minDate={moment(this.state.startDate).subtract(3, "days")}
                         maxDate={moment().add(3, "days")}
                       />
                     </div>
                   </div>
                  </Grid>
                 </div>
                 <div className="bedHotel">
                   <img src={Cama}/>
                   <h4>{count} noches</h4>
                 </div>
               </div>
             </div>
            {/*HUESPEDES*/}
            {data.map((key, i)=><AddRoomForm
                                    key={i}
                                    count={i}
                                    delete={this.deleteRoom}
                                    id={'Adulto'+i}
                                    object={key}
                                  />)}
            {/*ANADIR OTRA HABITACION*/}
            <div>
             <div className='linkHotel'>
              {data.length <= 2 ? <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> : ''}
              <a onClick={()=>this.addRooms()}>{data.length <= 2 ? 'Añadir otra habitación' : ''}</a>
             </div>
            </div>
            {/*BOTON BUSQUEDA*/}
            <Grid.Row centered className='divButtonCar'>
              <ButtonFormSearch title="BUSCAR EL MEJOR PRECIO"/>
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
