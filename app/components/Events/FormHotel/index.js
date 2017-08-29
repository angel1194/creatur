import React, {Component} from 'react';
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

class FormHotel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      startDate:moment("2017-09-16"),
      endDate:moment("2017-09-16").add(1, "days"),
      rooms:{
        room0:{
          adult:0,
          baby:0,
          child:{

          }
        }
      }
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleChangeEnd= this.handleChangeEnd.bind(this);
    this.inputValueChange= this.inputValueChange.bind(this);
    this.addRooms=this.addRooms.bind(this);
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

  inputValueChange(father,input){
    let name = input.target.name
    let value= input.target.value
    const rooms = this.state.rooms
    rooms[father][name]=value
    this.setState({
      rooms:rooms
    })
  }

  addRooms(){
    const rooms =this.state.rooms
    rooms[Date.now()] = {adult:0, baby:0,child:{}}
    this.setState({
      rooms:rooms
    })
  }

 deleteRoom(e){
   var state = this.state.rooms
   delete state[e]
   this.setState(state)
 }

 request(event){
   event.preventDefault()

   let checkin = this.state.startDate.format('YYYY-MM-DD')
   let checkout = this.state.endDate.format('YYYY-MM-DD')
   let rooms = this.state.rooms

   let request = {
     checkin: checkin,
     checkout: checkout,
     rooms
   }

  //  fetch('',{
  //     method: 'post',
  //     body: JSON.stringify(request)
  //   })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((recurso) => {
  //     console.log(recurso);
  //   })
    console.log(request);
 }

  render() {
    let data = Object.keys(this.state.rooms)
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
                         id="checkin"
                         selected={this.state.startDate}
                         onChange={this.handleChange}
                         minDate={moment("2017-09-16").subtract(3, "days")}
                         maxDate={moment("2017-09-16").add(3, "days")}
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
                         id="checkout"
                         selected={this.state.endDate}
                         onChange={this.handleChangeEnd}
                         minDate={moment(this.state.startDate)}
                         maxDate={moment("2017-09-16").add(3, "days")}
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
                                    inputValueChange={this.inputValueChange}
                                    delete={this.deleteRoom}
                                    object={key}
                                    input={this.state.rooms[key].child}
                                  />)}
            {/*ANADIR OTRA HABITACION*/}
            <div>
             <div className='linkHotel'>
              {data.length <= 2 ? <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> : ''}
              <a onClick={this.addRooms}>{data.length <= 2 ? 'Añadir otra habitación' : ''}</a>
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

export default FormHotel;
