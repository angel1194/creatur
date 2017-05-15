/**
*
* InputLabel
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InputLabel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

InputLabel.propTypes = {

};

export default InputLabel;
