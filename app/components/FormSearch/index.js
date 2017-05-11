/**
*
* FormSearch
*
*/

import React from 'react';
import {Form, Grid, Input, Button, Header, Checkbox, Divider} from 'semantic-ui-react'
import DatePickerForm from '../DatePickerForm/'
import { browserHistory } from 'react-router'
import FormAutocomplete from '../../components/FormAutocomplete'
import LoadingSpin from '../../components/LoadingSpin'
import ButtonSearch from '../../components/ButtonSearch'

function FormSearch(props) {
  return (
    <div id="inputSearchDisplay">
      <div className='ui form' >
        <Header as='h1' className='titleForm'>{props.title}</Header>
        <Grid>
          <LoadingSpin loading={props.loading}/>
          <FormAutocomplete saveLocation={props.saveLocation}/>
          <Divider className='dividerForm' />
          <DatePickerForm saveDate={props.saveDate} />
            <div className='errorsValidation'>
              <label id='error'></label>
            </div>
          <Grid.Row centered className='divButtonGreeen'>
            <ButtonSearch typeSearch='car' loadingTrue={props.loadingTrue}/>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

FormSearch.propTypes = {

};

export default FormSearch;
