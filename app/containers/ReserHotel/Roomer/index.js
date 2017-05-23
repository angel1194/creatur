/*
 *
 * Roomer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectRoomer from './selectors';
import {Container} from 'semantic-ui-react'
import Tabs from '../../../components/ReserHotel/Tabs'

export class Roomer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Helmet
          title="Roomer"
          meta={[
            { name: 'description', content: 'Description of Roomer' },
          ]}
        />
      <Tabs/>
      </Container>
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
