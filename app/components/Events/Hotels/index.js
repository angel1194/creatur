import React from 'react';
import styled from 'styled-components';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import { Wrapper, WrapperTrans, Column, Row, Title, Img } from '../../ReserHotel/RowHotel/StyledRowH/StyledRowH';
import StarRating from '../../ReserHotel/StarRating';
import TripAdvisor from '../../ReserHotel/TripAdvisor';
import LocationLabel from '../../ReserHotel/LocationLabel';
import PriceLabel from '../../ReserHotel/PriceLabel';
import Button from '../../ReserHotel/Button';
import AddCheckList from '../../AddCheckList';
import OffersDay from './OffersDay';
import Rooms from '../../../containers/Events/Rooms';

const ColumMarginRight = styled(Column) `
  margin-right: 10px;
  margin-top: 10px;
  align-items: flex-end;
`;

const ColumMarginTop = styled(Column) `
  margin-top: 10px;
  align-items: flex-start;
  padding-left: 10px;
`;

class Hotels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showRooms: false,
    }
    this.setShowRooms=this.setShowRooms.bind(this)
    this.setFalse=this.setFalse.bind(this)
  }

  setShowRooms(){
    this.setState({
      showRooms: true
    })
  }

  setFalse(){
    this.setState({
      showRooms: false
    })
  }

  render() {
    console.log('Componente Hotel',this.props.location);
    let night = this.props.stateNight
    return (
      <Container>
        <Column>
          <Wrapper>
            <Row>
              <Img src={this.props.elements.image} Width="200px" Height="156px" />
              <ColumMarginTop>
                <Title>{this.props.elements.nameHotel}</Title>
                <StarRating key={this.props.elements.key} NumStart={this.props.elements.numStart} />
                <TripAdvisor Calification='0' />
                <LocationLabel Title={this.props.elements.location} />
              </ColumMarginTop>
            </Row>
            <Row>
              <ColumMarginRight>
                <PriceLabel Tam="Com" Since={this.props.elements.price} Currency="MX" Total='1736' />
                {/* <AddCheckList id={this.props.elements.key} JustifyContent="flex-end" Margin="20px" text={"DOBLE 2 CAMAS STANDARD Hasta 2 Personas"}/> */}
                <br/><br/><br/>
                  <Button Title="Reservar" Color="Blue" location={this.props.location}/>
              </ColumMarginRight>
            </Row>
          </Wrapper>
        {Object.keys(night).map((item,i)=>
          <OffersDay
            key={i}
            setShowRooms={this.state.showRooms === false ? this.setShowRooms : this.setFalse}
            state={this.state.showRooms}
            hotels={this.props.stateHotels}
            item={night[item]}
          />
        )}
        </Column>
      </Container>
    );
  }
}

export default Hotels;
