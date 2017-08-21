/**
*
* TicketForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'
import Select from 'react-select';

class TicketForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid className='gridAutocompleteForm'>
       <div className='gridCenter'>
        <div className='selectFormSearch'>
          <span className="input-group-addon-standar"><i className='fa fa-ticket'></i></span>
          <input type="number" min="0" placeholder="0"/>
        </div>
      </div>
     </Grid>
    );
  }
}

TicketForm.propTypes = {

};

export default TicketForm;
