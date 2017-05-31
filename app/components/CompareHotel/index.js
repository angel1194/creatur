/**
*
* CompareHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import InfoHotel from '../ReserHotel/InfoHotel'
import {Container} from 'semantic-ui-react'
import SendQuotationHotel from '../ReserHotel/SendQuotationHotel'
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
  flex-direction:row
  flex-wrap:wrap
  `;


function CompareHotel() {
  return (
    <Container>
      <GeneralContainer>
        <ContainerInfo>
          <InfoHotel/>
          <InfoHotel/>
        </ContainerInfo>
        <SendQuotationHotel/>
      </GeneralContainer>
    </Container>
  );
}

CompareHotel.propTypes = {

};

export default CompareHotel;
