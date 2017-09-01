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
import {setRooms,setHotels} from '../../../containers/Events/Firebase/firebase'


class FormHotel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      startDate:moment('05/10/2017'),
      endDate:moment('06/10/2017'),
      roomsUI:{
        room0:{
          adult:0,
          baby:0,
          child:{}
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
    console.log(date);
    this.setState({
      startDate:moment(date),
    })
    console.log('startDate',this.state.startDate);
  }


  handleChangeEnd(date) {
    this.setState({
      endDate: date
    })
  }

  inputValueChange(father,input){
    let name = input.target.name
    let value= input.target.value
    const rooms = this.state.roomsUI
    rooms[father][name]=value
    this.setState({
      roomsUI:rooms
    })
  }

  addRooms(){
    const rooms =this.state.rooms
    rooms[Date.now()] = {adult:0, baby:0,child:{}}
    this.setState({
      roomsUI:rooms
    })
  }

 deleteRoom(e){
   var state = this.state.rooms
   delete state[e]
   this.setState(state)
 }

 request(event){
   event.preventDefault()
   const{startDate,endDate,rooms} = this.state
   let request = {
     startDate,
     endDate,
     rooms,
   }

   setRooms().then(
     res => this.setState({
       rooms: res.val()
     })
   )

  setHotels().then(
    res=>this.setState({
      hotels:res.val()
    })
  )
  console.log(this.state);
  // let nightRooms = Object.keys(this.state.rooms)
  // let momentNight = nightRooms.map((night)=> console.log(moment(night, 'YYYY/MM/DD HH:mm').unix()))
  // console.log(momentNight);
 }

  render() {
    let data = Object.keys(this.state.roomsUI)
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
                <SearchForm location="Merida"/>
                <div className='searchMap'>
                  <div>
                    <a id='search' href=''>
                      <i className='fa fa-search fa-lg' aria-hidden='true'>
                      </i> Buscar en Mapa
                    </a>
                  </div>
                </div>
               <div className='dad-datesHotel'>
                 <div className='datesHotel'>
                   <label htmlFor="checkin" className='fecha'>Fecha de llegada</label>
                   <Grid className='gridAutocompleteForm'>
                    <div className='gridCenterDate'>
                     <div className='selectFormSearch'>
                       <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
                       <DatePicker
                         selected={this.state.startDate}
                         onChange={this.handleChange}
                         minDate={moment('2017-10-02')}
                         maxDate={moment('2017-10-08')}
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
                         minDate={moment(this.state.startDate).add(1,'days')}
                         maxDate={moment("2017-10-08")}
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
            {data.map((key, i)=><AddRoomForm
                                    key={i}
                                    count={i}
                                    inputValueChange={this.inputValueChange}
                                    delete={this.deleteRoom}
                                    object={key}
                                    input={this.state.roomsUI[key].child}
                                  />)}
            <div>
             <div className='linkHotel'>
              {data.length <= 2 ? <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> : ''}
              <a onClick={this.addRooms}>{data.length <= 2 ? 'Añadir otra habitación' : ''}</a>
             </div>
            </div>
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
