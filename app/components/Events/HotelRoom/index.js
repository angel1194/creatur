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

const Divider=styled.div`
  width:100%;
  border:1px solid #58ACFA ;
`;

class HotelRoom extends React.Component {

  render(){
    let element = this.props.elements
    // let elements = element.map((item, i)=> element[item])

    return (
      <ContainerRoom>
        <RoomImg>
          <NameRoom>STANDARD</NameRoom>
          <Img src='https://images.trvl-media.com/hotels/5000000/4460000/4454800/4454770/4454770_62_z.jpg'/>
        </RoomImg>
        <DetailsRoom>
          <Label>Capacidad para 4 personas</Label>
          <Label>Habitación estándar, 2 camas dobles</Label>
          <Label>Regimen: Solo Habitación</Label>
        </DetailsRoom>
        <ContainerPrice>
          <Label> Por noche ${this.props.elements.price} MXN</Label>
          <LabelA> Impuestos $100.56 MXN</LabelA>
          <Title>Precio Total</Title>
          <H3>$3,089.56 <Label>USD</Label></H3>
          {/* <LinkA>Politicas de Cancelacion</LinkA> */}<br/>
          <ContainerButtonGreen>
            {/* <Link to="#"> */}
              <ButtonGreen onClick={()=> this.props.addCar(element, this.props.elements.room0['idHotel'])}>
                Añadir al carrito
              <Space name='shopping-cart' />
              </ButtonGreen>
            {/* </Link> */}
          </ContainerButtonGreen>
        </ContainerPrice>
        <Divider/>
      </ContainerRoom>
    );
  }
}

export default HotelRoom;
