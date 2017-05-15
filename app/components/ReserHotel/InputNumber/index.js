/**
*
* InputNumber
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InputNumber() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

InputNumber.propTypes = {

};

export default InputNumber;
