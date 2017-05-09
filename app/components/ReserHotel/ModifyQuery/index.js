/**
*
* ModifyQuery
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ModifyQuery() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ModifyQuery.propTypes = {

};

export default ModifyQuery;
