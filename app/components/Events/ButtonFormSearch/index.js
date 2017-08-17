/**
*
* ButtonFormSearch
*
*/

import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

function ButtonFormSearch() {
    return (
      <div>
        <Link>
          <Button className="buttonGreen">¡BUSCAR EL MEJOR PRECIO!</Button>
        </Link>
      </div>
    );
  }

ButtonFormSearch.propTypes = {

};

export default ButtonFormSearch;
