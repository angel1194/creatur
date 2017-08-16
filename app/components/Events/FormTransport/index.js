/**
*
* FormTransport
*
*/

import React from 'react';
// import styled from 'styled-components';
import moment from 'moment';
import SearchForm from '../../Events/SearchForm';
import {Grid, Header} from  'semantic-ui-react';
import DatePicker from 'react-datepicker';
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
            </div>

            <div className='dad-dates'>
              <div className='dates'>
                <label htmlFor="checkin" className='fecha'>FECHA</label>
                <ul>
                  <li><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></li>
                  <li><DatePicker onChange={this.handleChange} minDate={moment()}/></li>
                </ul>

              </div>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

FormTransport.propTypes = {

};

export default FormTransport;
