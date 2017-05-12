/*
 *
 * HotelQuotation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectHotelQuotation from './selectors';
import {Container } from 'semantic-ui-react'
import messages from './messages';
import SendQuotationHotel from '../../../components/ReserHotel/SendQuotationHotel'

export class HotelQuotation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Helmet
          title="Cotizacion de Hoteles"
          meta={[
            { name: 'description', content: 'Description of HotelQuotation' },
          ]}
        />
      <SendQuotationHotel/>
      </Container>
    );
  }
}

HotelQuotation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HotelQuotation: makeSelectHotelQuotation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelQuotation);
