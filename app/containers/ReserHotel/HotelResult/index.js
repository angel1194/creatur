/*
 *
 * HotelResult
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
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
import MostSold from '../../../components/ReserHotel/MostSold';
import MapView from '../../../components/ReserHotel/MapView';
import { Container } from 'semantic-ui-react';

const WrapperBar = styled(Wrapper)`
    min-height: 118px;
`; 


export class HotelResult extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <Container>
        <WrapperBar>
          <WrapperFlex Order={1} Grow={1} Shrink={6} Basis={20}>
           <MapView />
          </WrapperFlex>
          <WrapperFlex Order={2} Grow={3} Shrink={1} Basis={60}></WrapperFlex>
          <WrapperFlex Order={3} Grow={1} Shrink={6} Basis={20}></WrapperFlex>
        </WrapperBar>
        <Wrapper>
          <Filter />
          <RowHotel />
          <WrapperFlex Order={3} Grow={1} Shrink={6} Basis={20}>
            <HotelRate />
            <MostSold />
          </WrapperFlex>
        </Wrapper>
      </Container>
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
