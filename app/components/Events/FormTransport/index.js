/**
*
* FormTransport
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

class FormTransport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
      super(props);
        this.state =
        {
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
              <SearchForm value='MERIDA'/>

              <div className='dad-dates'>
                <div className='dates'>
                  <label htmlFor="checkin" className='fecha'>FECHA</label>
                  <ul>
                    <li><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></li>
                    <li><DatePicker selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}/></li>
                  </ul>

                </div>

              </div>
              <div className='passe'>

              <div className="dad-reserv">
              <div className="child">
                <label htmlFor={this.props.idFor + 'A'}>Adultos</label>
                <input id={this.props.idFor + 'A'} onChange={this.OnChange} className="inputs" type="number" min="0" placeholder="0" name={`adultHotel${this.props.idFor}`}/>
              </div>
              <div className="child">
                <label htmlFor={this.props.idFor + 'n'}>Niños (0-7)</label>
                <input id={this.props.idFor + 'n'} onChange={this.clickInput} className="inputs" type="number" max="2" placeholder="0" name={`childHotel${this.props.idFor}`}/>
              </div>
            </div>
          </div>

          </div>
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
