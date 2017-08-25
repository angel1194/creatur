import React from 'react';
// import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'
import Select from 'react-select';


class SearchForm extends React.PureComponent {
    render(){
      return(
      <Grid className='gridAutocompleteForm'>
       <div className='gridCenter'>
        <div className='selectFormSearch'>
         <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
         <input type="text" value={this.props.location} id={this.props.idLocation}/>
        </div>
       </div>
      </Grid>

      )
    }

  }


SearchForm.propTypes = {

};

export default SearchForm;
