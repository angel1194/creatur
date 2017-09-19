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
import ContainerRoomer from '../../../components/ContainerRoomer'
import Header from '../../../components/Header';

export class Roomer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Header li_1="Servicio" li_2="Mi reserva" li_3="Mi Viaje" li_4="Inicia Sesion" toLink="/"/>
        <Helmet
          title="Roomer"
          meta={[
            { name: 'description', content: 'Description of Roomer' },
          ]}
        />
      <ContainerRoomer/>
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
