/*
 *
 * Pasarela
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectPasarela from './selectors';
import styled from 'styled-components';
//import messages from './messages';
//import { FormattedMessage } from 'react-intl';
import Details from '../../../components/ReserHotel/Details';

const Container = styled.div `
  width : 70%;
  margin: auto;
`;

export class Pasarela extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Details/>
      </Container>
    );
  }
}

Pasarela.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Pasarela: makeSelectPasarela(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pasarela);
