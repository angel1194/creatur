import React from 'react';
// import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'
import Select from 'react-select';


class SearchForm extends React.PureComponent {
    render(){
      return(
        <div className='selectFormSearch'>
          <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span><input width='50' type="text" value='MERIDA'/>
        </div>
      )
    }

  }


SearchForm.propTypes = {

};

export default SearchForm;
