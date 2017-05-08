/**
*
* LocationLabel
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function LocationLabel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LocationLabel.propTypes = {

};

export default LocationLabel;
