/**
*
* DateForm
*
*/

import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Grid } from  'semantic-ui-react';

class DateForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
      <Grid className='gridAutocompleteForm'>
       <div className='gridCenterDate'>
        <div className='selectFormSearch'>
          <span className="input-group-addon-standar"><i className='fa fa-calendar fa-lg' aria-hidden='true'></i></span>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} minDate={moment()}/>
        </div>
      </div>
     </Grid>
    );
  }
}

DateForm.propTypes = {

};

export default DateForm;
