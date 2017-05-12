/**
*
* SendQuotationHotel
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import InputIcon from '../../InputIcon'
import messages from './messages';

const ContainerForm = styled.div`
    width:20%;
    border:1px solid #eaeaea;
    height:300px;
    background-color:#FCFF8B;
    padding:15px;
`;

const ColorAwesome=styled(FontAwesome)`
  color:#87b672 !important;
  padding:5px;
`;
const ContIcon=styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:flex-end;
  aling-content:space-around;

`;

function SendQuotationHotel() {
  return (
    <ContainerForm>
      <ContIcon>
        <ColorAwesome name='envelope' size='lg'/>
        <ColorAwesome name='print' size='lg'/>
        <ColorAwesome name='download' size='lg'/>
      </ContIcon>
      <InputIcon name='envelope' placeholder='tucorreo@aqui.com' type='text'/>
    </ContainerForm>
  );
}

SendQuotationHotel.propTypes = {

};

export default SendQuotationHotel;
