import React from 'react';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import ButtonFormSearch from '../ButtonFormSearch';
import DateForm from '../DateForm';
import Cama from './cama.png';
import {Icon} from './style'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class FormHotel extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      hotels:{},
      startDate:moment(),
      endDate:moment().add(1, "days"),
    }
    this.request=this.request.bind(this)
    this.handleChange= this.handleChange.bind(this)
    this.handleChangeEnd= this.handleChangeEnd.bind(this);
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
    let rooms = this.refs.rooms.value
    let adult = this.refs.adult.value
    let child = this.refs.child.value

    let request = {
      checkin: checkin,
      checkout: checkout,
      rooms:{
        room:{
          key:1,
          adult: adult,
          child:{

          }
        },
      }
    }
    console.log(request);
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
