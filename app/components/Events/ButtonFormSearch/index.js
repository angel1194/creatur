/**
*
* ButtonFormSearch
*
*/

import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

function ButtonFormSearch(props) {
    return (
      <div className='divButtonCar'>
        <Link>
          <Button className="buttonCar" onClick={()=>props.location()}>¡{props.title}!</Button>
        </Link>
      </div>
    );
  }

ButtonFormSearch.propTypes = {

};

export default ButtonFormSearch;
