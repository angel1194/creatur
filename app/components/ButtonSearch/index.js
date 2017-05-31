/**
*
* ButtonSearch
*
*/

import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router'
import styled from 'styled-components';


function ButtonSearch(props) {
  if (props.typeSearch == 'hotel') {
    return (
      <div>
        <Link to='/hotel/available'>
          <Button className="buttonGreen">¡BUSCAR EL MEJOR PRECIO!</Button>
        </Link>
      </div>
    );
  }
  else {
    return (
      <div>
        <Button className="buttonGreen" onClick={props.loadingTrue}>¡BUSCAR EL MEJOR PRECIO!</Button>
      </div>
    );
  }



}

ButtonSearch.propTypes = {

};

export default ButtonSearch;
