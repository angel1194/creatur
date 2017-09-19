/*
 *
 * HotelHome
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectHotelHome from './selectors';
import messages from './messages';
import Header from '../../../components/Header';

export class HotelHome extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header li_1="Servicio" li_2="Mi reserva" li_3="Mi Viaje" li_4="Inicia Sesion" toLink="/"/>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HotelHome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HotelHome: makeSelectHotelHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelHome);
