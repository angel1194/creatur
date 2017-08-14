/*
 *
 * FlyForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectFlyForm from './selectors';
import messages from './messages';

export class FlyForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="FlyForm"
          meta={[
            { name: 'description', content: 'Description of FlyForm' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FlyForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FlyForm: makeSelectFlyForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlyForm);
