import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import ButtonFormSearch from '../ButtonFormSearch';
import Cama from './cama.png';
import {Icon} from './style'

class FormHotel extends React.PureComponent {
  constructor(){
    super()
    this.state = {
      hotels:{},
      startDate:moment(),
      endDate:moment().add(1, "days"),
      input:[],
      room:{},
      data:[
        {
          Room1:{}
        }
      ]
    }
    this.request=this.request.bind(this)
    this.handleChange= this.handleChange.bind(this);
    this.handleChangeEnd= this.handleChangeEnd.bind(this);
    this.addChild=this.addChild.bind(this);
    this.addRooms=this.addRooms.bind(this)
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

  request(event){
    event.preventDefault()

    let checkin = this.state.startDate.format('YYYY-MM-DD')
    let checkout = this.state.endDate.format('YYYY-MM-DD')
    let adult = this.refs.rooms.value
    let babys = this.refs.adult.value
    console.log(event.target.elements['age1']);
    let age = document.getElementById('age').value

    let request = {
      checkin: checkin,
      checkout: checkout,
      rooms:[
        {
        'adult': adult,
        'babys':babys,
        'child':[{
            key:Date.now(),
            age: age,
          }]
        }
      ]
    }
    console.log(request);
  }

  addChild(e){
     const input=[]
     for (var i = 1; i <= e; i++) {
      input.push(
        <div key={i} className='section-dad'>
          <div className='section-child'>
           <label htmlFor="">Menor {i}</label>
           <input className='inputs' type="number" max='17' min='0' id='age'/>
          </div>
        </div>
      )
    }
    this.setState({
      input:input
    })
  }

  addRooms(){
    var state =  this.state.data
    var newRoom = {}
    newRoom[Date.now()] = {}
    this.setState({
      data:state.concat(newRoom)
    })
  }

  render() {
    console.log('renderizando');
    return (
      <div id='inputSearchDisplay'>
        <form onSubmit={this.request}>
          <div className='ui form'>
            <Header as='h1' className='titleFormHotel'>{this.props.title}</Header>
            <Grid>
              <div className='containerFormHotel'>
               {/*FORM LOCATION */}
                <SearchForm value="Merida"/>
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
                   <h4>4 noches</h4>
                 </div>
               </div>
             </div>
            {/*HUESPEDES*/}
            {this.state.data.map((room, i)=>
              <div key={i}>
                {console.log(room)}
                <div className="dad-reservHotel">
                  <div className="childHotel">
                    <label htmlFor=''>Adultos</label>
                    <input className="inputs" type="number" min="0" placeholder="0" ref='rooms'/>
                  </div>
                  <div className="childHotel">
                    <label htmlFor=''>Cunas</label>
                    <input className="inputs" type="number" min="0" placeholder="0" ref='adult'/>
                  </div>
                  <div className="childHotel">
                    <label htmlFor=''>Niños</label>
                    <input className="inputs" type="number"  max='2' placeholder="0" onChange={(e)=>this.addChild(e.target.value)} ref='child'/>
                  </div>
                </div>
                  {/*AGREGAR EDAD NINOS*/}
                <div className='edadCLIENTES'>
                  <p className='childYears'>{this.state.input <= 0 ? '' : 'Edad de los menores'}</p>
                </div>
                <div className='dad-reservHotelChild'>
                  {this.state.input.map(element => element)}
                </div>
              </div>
            )}

            {/*ANADIR OTRA HABITACION*/}
            <div className='linkHotel'>
              {this.state.data.length <= 2 ? <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> : ''}
              <a onClick={() => this.addRooms()}>{this.state.data.length <= 2 ? 'Añadir otra habitación' : ''}</a>
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