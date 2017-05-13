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
import AddButton from '../../AddButton'
import TextArea from '../../TextArea'
import GreenButton from '../../GreenButton'
import messages from './messages';

const ContainerForm = styled.div`
    width:20%;
    border:1px solid #eaeaea;
    height:300px;
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
  margin-bottom:10px;
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
      <AddButton text='Anadir otra habitacion'/>
      <TextArea placeholder='Comentarios'/>
      <GreenButton text='ENVIAR COTIZACION'/>
    </ContainerForm>
  );
}

SendQuotationHotel.propTypes = {

};

export default SendQuotationHotel;
