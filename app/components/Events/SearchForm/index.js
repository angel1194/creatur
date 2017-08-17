/**
*
* SearchForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'
import Select from 'react-select';


class SearchForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render(){
      return(
      <Grid className='gridAutocomplete'>
          <Grid.Row centered>
        <div className='selectFormSearch'>
          <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
          <input type="text" value='MERIDA'/>
        </div>
      </Grid.Row>
      </Grid>

      )
    }

  }


SearchForm.propTypes = {

};

export default SearchForm;
