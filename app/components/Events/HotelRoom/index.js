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
  margin: 10px 0px 10px 0px !important;
`;

const Divider=styled.div`
  width:100%;
  border:1px solid #58ACFA ;
`;

class HotelRoom extends React.Component {

  render(){
    let element = Object.keys(this.props.elements.rooms)
    let checkin = [this.props.night.checkin]
    let checkout = [this.props.night.checkout]
    let count = parseInt(checkout) - parseInt(checkin)

    return (
      <div>
      {element.map((item, i)=>
        <ContainerRoom key={i}>
          <RoomImg>
            <NameRoom>{this.props.elements.rooms[item].type}</NameRoom>
            <Img src={this.props.elements.rooms[item].image}/>
          </RoomImg>
          <DetailsRoom>
            <Label>Capacidad para {this.props.elements.rooms[item].occupancy} personas</Label>
            <Label>{this.props.elements.rooms[item].description}</Label>
            <Label>Regimen: Solo Habitación</Label>
          </DetailsRoom>
          <ContainerPrice>
            <Label> Por noche ${this.props.elements.rooms[item].price} MXN</Label>
            <LabelA>{count} noches</LabelA>
            <Title>Precio Total</Title>
            <H3>${this.props.elements.rooms[item].price * count} <Label>MXN</Label></H3>
            {/* <LinkA>Politicas de Cancelacion</LinkA> */}<br/>
            <ContainerButtonGreen onClick={(e)=>this.props.addRooms(this.props.elements.rooms[item], this.props.elements)}>
              <ButtonGreen>
                Reservar
              <Space name='shopping-cart' />
              </ButtonGreen>
            </ContainerButtonGreen>
          </ContainerPrice>
          <Divider/>
        </ContainerRoom>)}
      </div>
    );
  }
}

export default HotelRoom;
