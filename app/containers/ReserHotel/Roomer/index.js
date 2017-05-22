/*
 *
 * Roomer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectRoomer from './selectors';
import messages from './messages';
import Tabs from '../../../components/ReserHotel/Tabs'

export class Roomer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Roomer"
          meta={[
            { name: 'description', content: 'Description of Roomer' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Roomer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Roomer: makeSelectRoomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Roomer);
