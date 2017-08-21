/**
*
* TimeForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'
import Select from 'react-select';

class TimeForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid className='gridAutocompleteForm'>
       <div className='gridCenterTime'>
        <div className='selectFormSearch'>
          <input type="time" className='inputTime' />
        </div>
       </div>
     </Grid>
    );
  }
}

TimeForm.propTypes = {

};

export default TimeForm;
