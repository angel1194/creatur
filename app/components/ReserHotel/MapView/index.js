/**
*
* MapView
*
*/

import React from 'react';
import styled from 'styled-components';
import Img from './StyledMap/Img';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import IcnDefault from './MapDefault.jpg';


function MapView() {
  return (
    <div>
      <Img src={IcnDefault} Width={"215px"} />

    </div>
      );
}

MapView.propTypes = {

      };

export default MapView;
