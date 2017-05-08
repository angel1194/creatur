/*
 *
 * HotelResult
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectHotelResult from './selectors';
import messages from './messages';
import WrapperFlex from '../../../components/ReserHotel/WrapperFlex';

import Wrapper from './Wrapper';
import Filter from '../../../components/ReserHotel/Filter';
import RowHotel from '../../../components/ReserHotel/RowHotel';
import HotelRate from '../../../components/ReserHotel/HotelRate';

export class HotelResult extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Filter />
        <RowHotel />
        <HotelRate />
      </Wrapper>
    );
  }
}

HotelResult.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HotelResult: makeSelectHotelResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelResult);
