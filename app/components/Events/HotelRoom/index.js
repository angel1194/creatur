import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import H3 from '../../ReserHotel/H3'
import CollapseSection from '../../../components/ReserHotel/CollapseSection';
import RadioButtonGreen from '../../RadioButtonGreen'
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import {ContainerRoom, RoomImg, DetailsRoom, Label, LinkA, ContainerPrice, ContainerButtonGreen, ButtonGreen, LabelA, Img} from './style'


const Space = styled(FontAwesome) `
  margin-left:5px;
`;

const Title = styled(H3) `
  color:#424242 !important;
  margin-top:10px;
`;

const NameRoom = styled(H3) `
  font-family:roboto !important;
  font-size:20px;
`;

class HotelRoom extends React.Component {

  render(){
    return (
      <ContainerRoom>
        <RoomImg>
          <NameRoom>nombre</NameRoom>
          <Img src='https://images.trvl-media.com/hotels/2000000/1790000/1781400/1781314/412853a8_z.jpg' width='250' />
        </RoomImg>
        <DetailsRoom>
          <Label>Capacidad para 3 personas</Label>
          <Label>Regimen: Solo Habitación</Label>
        </DetailsRoom>
        <ContainerPrice>
          <Label> Por noche $798.00 MXN</Label>
          <LabelA> Impuestos $100.56 usd</LabelA>
          <Title>Precio Total</Title>
          <H3>$3,089.56 <Label>USD</Label></H3>
          {/* <LinkA>Politicas de Cancelacion</LinkA> */}<br/>
          <ContainerButtonGreen>
            <Link to="/manzanero/rooms">
              <ButtonGreen>
                Añadir al carrito
              <Space name='shopping-cart' />
              </ButtonGreen>
            </Link>
          </ContainerButtonGreen>
        </ContainerPrice>
      </ContainerRoom>
    );
  }
}

export default HotelRoom;
