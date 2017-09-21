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
import {Container} from 'semantic-ui-react'
//import messages from './messages';
//import { FormattedMessage } from 'react-intl';
import Details from '../../../components/ReserHotel/Details';
import Header from '../../../components/Header';


export class Pasarela extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Header li_1="Servicio" li_2="Mi reserva" li_3="Mi Viaje" li_4="Inicia Sesion" toLink="/"/>
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
