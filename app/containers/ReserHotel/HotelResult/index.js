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


const WrapperBar = styled(Wrapper) `
    min-height: 118px;
`;

const Container = styled.div`
  width : 90%;
  max-width: 1200px;
  min-height: 1000px;
  margin: auto;
  /*
  Flex
  */ 

  display:flex;
	flex-flow: row nowrap;
;
`;

const ContenFilter = styled.div`
  flex:1 1 20%;
  order:1;
  border: 1px solid #eaeff3;
  margin:4px;

`;


const ContenResults = styled.div`
  flex:1 1 60%;
  order:2;

  margin:4px;
`;

const ContenTools = styled.div`
  flex:1 1 20%;
  order:3;
  border: 1px solid #eaeff3;
  margin:4px;

`;





export class HotelResult extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <Container>
        <ContenFilter>
         <Filter />
        </ContenFilter>
        <ContenResults>
          Results
        </ContenResults>
        <ContenTools>
          Tools
        </ContenTools>


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
