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
import OffersDay from '../../ReserHotel/OffersDay';
import AddCheckList from '../../AddCheckList';

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

  render() {
    return (
      <Container>
        <Column>
          <Wrapper>
            <Row>
              <Img src={this.props.elements.image} Width="200px" Height="156px" />
              <ColumMarginTop>
                <Title>{this.props.elements.title}</Title>
                <StarRating NumStart={this.props.elements.numStart} />
                <TripAdvisor Calification='0' />
                <LocationLabel Title={this.props.elements.location} />
              </ColumMarginTop>
            </Row>
            <Row>
              <ColumMarginRight>
                <PriceLabel Tam="Com" Since={this.props.elements.price} Currency="MX" Total='1736' />
                <AddCheckList id={this.props.id.toString()} JustifyContent="flex-end" Margin="20px" />
                <Link onClick={() => this.props.test(this.props.elements.key, this.props.elements.items)} to="/manzanero/rooms">
                  <Button Title="Habitacion" Color="Blue" />
                </Link>
              </ColumMarginRight>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    );
  }
}

export default Hotels;
