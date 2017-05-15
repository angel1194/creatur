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
import BarFilters from '../../../components/ReserHotel/BarFilters';
import SortPrice from '../../../components/ReserHotel/SortPrice';



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

`;

const ContainerBar = styled(Container) `
 min-height: 118px;
 margin-bottom: 15px;
`;

const ContenFilter = styled.div`
  flex:1 1 20%;
  order:1;
  border: 2px solid #eaeff3;
  margin: 4px;
  min-width: 234px;
  max-height:700px; 

`;


const ContenResults = styled.div`
  flex:1 1 60%;
  order:2;
  min-width: 704px;
  max-height:900px;
  // overflow: scroll;
`;

const ContenTools = styled.div`
  flex:1 1 20%;
  order:3;
  border: 2px solid #eaeff3;
  margin:4px;
  min-width: 234px;
  max-height:700px;
  
`;

export class HotelResult extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ContainerBar>
          <MapView />
          <BarFilters />
          <SortPrice />
        </ContainerBar>
        <Container>
          <ContenFilter>
            <Filter />
          </ContenFilter>
          <ContenResults>
            <RowHotel />
          </ContenResults>
          <ContenTools>
            <MostSold />
          </ContenTools>
        </Container>
      </div>

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
