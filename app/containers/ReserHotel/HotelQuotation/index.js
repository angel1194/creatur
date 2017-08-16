import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectHotelQuotation from './selectors';
import {Container } from 'semantic-ui-react'
import messages from './messages';
import InfoHotel from '../../../components/ReserHotel/InfoHotel'
import SendQuotationHotel from '../../../components/ReserHotel/SendQuotationHotel'
import styled from 'styled-components';
import HeaderTable from '../../../components/HeaderTable'
import HotelRoom from '../../../components/HotelRoom'
import RadioButtonGreen from '../../../components/RadioButtonGreen'

const GeneralContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
`;

const ContainerInfo = styled.div`
  width:80%;
  height:auto;
  display:flex;
`;

const Divider=styled.div`
  width:100%;
  border:1px solid #58ACFA ;
`;

const Div = styled.div`
  width: 80%;
`;

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
      <GeneralContainer>
        <ContainerInfo>
          <InfoHotel/>
        </ContainerInfo>
        <SendQuotationHotel/>
      </GeneralContainer>
      <Div>
        <HeaderTable/>
        <HotelRoom NameRoom='Doble Standard'/>
        <Divider/>
        <HotelRoom NameRoom='Doble 2 Camas Standard'/>
         <Divider/>
        <HotelRoom NameRoom='Doble design room'/>
      </Div>
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
