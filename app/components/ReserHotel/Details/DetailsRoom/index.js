/**
*
* DetailsRoom
*
*/

import React,{ PropTypes } from 'react';
import styled,{css} from 'styled-components';
import H3 from '../../H3'
import CollapseSection from '../../CollapseSection';
import RadioButtonGreen from '../../../RadioButtonGreen'
import FontAwesome from 'react-fontawesome';

const ContainerRoom=styled.div`
  width: 100%;
  display:flex;
  flex-wrap:wrap;
`;

const RoomImg=styled.div`
  padding:0px 15px 10px 15px;
  width:33.33%;
  height:245px;
  border-right:2px solid #58ACFA
`;

const NameRoom=styled(H3)`
  font-family:roboto !important;
  font-size:20px;
`;

const DetailsRooms=styled.div`
  width:33.33%;
  display:flex;
  flex-direction:column;
  height:245px;
  border-right:2px solid #58ACFA;
  padding:15px 15px 10px 40px;
`;

const Label = styled.label`
  color:#5e5e5e;
  margin-top:5px;
`;

const LabelA=styled(Label)`
  margin-top:0px !important
`;

const LinkA=styled.a`
  color:#87b672 !important;
  text-decoration:underline
  margin-top:15px;
  cursor:pointer;
`;

const ContainerPrice=styled.div`
  width:33.33%;
  height:245px;
  padding:15px 50px;
  display:flex;
  flex-direction:column;
`;

const ContainerButtonGreen=styled.div`
  width:75%;
  margin-bottom:20px;
  background:#87b672;
  margin-left:10px;
  color:white;
  font-family:Montserrat;
  display:flex;
  flex-direction:column;
  align-items:center
  padding:5px 15px;
`;

const ButtonGreen=styled.label`
  width:auto;
  border-bottom:1px solid white;
`;

const Space=styled(FontAwesome)`
  margin-left:5px;
`;

const Title=styled(H3)`
  color:#424242 !important;
  margin-top:10px;
`;

function DetailsRoom(props) {
  return (
    <ContainerRoom>
      <RoomImg>
        <NameRoom>Villa Sunset Water</NameRoom>
        <img src='http://lorempixel.com/250/180/business/9/'/>
      </RoomImg>
      <DetailsRooms>
        <Label>Capacidad para 3 personas</Label>
        <Label>Opciones de cama:</Label>
        <RadioButtonGreen text='2 camas dobles'  ID='1' name='Habitacion'/>
        <RadioButtonGreen text='1 cama doble'  ID='2' name='Habitacion'/>
        <Label>Piscina privada con vista al mar</Label>
        <LabelA>Banera</LabelA>
        <LabelA>Patio</LabelA>
        <LinkA>Mas</LinkA>
      </DetailsRooms>
      <ContainerPrice>
        <ContainerButtonGreen>
          <ButtonGreen>
            Reservar
            <Space name='chevron-right'/>
          </ButtonGreen>
        </ContainerButtonGreen>
        <Label> Por noche $1,200.56 usd</Label>
        <LabelA> Impuestos $100.56 usd</LabelA>
        <Title>Precio Total</Title>
        <H3>$3,089.56 <Label>USD</Label></H3>
        <LinkA>Politicas de Cancelacion</LinkA>
      </ContainerPrice>
    </ContainerRoom>
  );
}

DetailsRoom.propTypes = {

};

export default DetailsRoom;
