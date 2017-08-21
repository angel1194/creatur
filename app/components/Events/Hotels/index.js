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
  constructor(){
    super();
    this.state = {
      showRooms: false
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
    return (
      <Container>
        <Column>
          <Wrapper>
            <Row>
              <Img src={this.props.elements.image} Width="200px" Height="156px" />
              <ColumMarginTop>
                <Title>{this.props.elements.title}</Title>
                <StarRating key={this.props.id} NumStart={this.props.elements.numStart} />
                <TripAdvisor Calification='0' />
                <LocationLabel Title={this.props.elements.location} />
              </ColumMarginTop>
            </Row>
            <Row>
              <ColumMarginRight>
                <PriceLabel Tam="Com" Since={this.props.elements.price} Currency="MX" Total='1736' />
                {/* <AddCheckList id={this.props.id.toString()} JustifyContent="flex-end" Margin="20px" /> */}
                <br/><br/><br/><br/>
                <Link onClick={() => this.props.test(this.props.elements.key, this.props.elements.items)} to="/manzanero/rooms">
                  <Button Title="Reservar" Color="Blue" />
                </Link>
              </ColumMarginRight>
            </Row>
          </Wrapper>
          <OffersDay setShowRooms={this.state.showRooms === false ? this.setShowRooms : this.setFalse} state={this.state.showRooms}/>
        </Column>
      </Container>
    );
  }
}

export default Hotels;
