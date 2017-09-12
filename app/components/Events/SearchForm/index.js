import React from 'react';
// import styled from 'styled-components';
import 'react-select/dist/react-select.css'
import { Grid } from 'semantic-ui-react'
import Select from 'react-select';


function SearchForm(props) {
  return(
  <Grid className='gridAutocompleteForm'>
   <div className='gridCenter'>
    <div className='selectFormSearch'>
     <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
     <input type="text" value={props.location} readOnly/>
    </div>
   </div>
  </Grid>

  )
}

export default SearchForm;
