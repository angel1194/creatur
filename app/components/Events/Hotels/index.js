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
import MapView from '../../ReserHotel/MapView';
import {Div, DivRooms} from './style';
import InicialState from '../state'

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
    this.state = InicialState
  }
  render() {
    const {hotels} = this.state

    return (
      <Container>
        <Div>
          <DivRooms>
            {Object.keys(hotels).map((item, i)=>
            <Column>
              <Wrapper>
                <Row>
                  <Img src={hotels[item].image} Width="200px" Height="156px" />
                  <ColumMarginTop>
                    <Title>{hotels[item].title}</Title>
                    <StarRating NumStart={hotels[item].numStart} />
                    <TripAdvisor Calification='0' />
                    <LocationLabel Title={hotels[item].location} />
                  </ColumMarginTop>
                </Row>
                <Row>
                  <ColumMarginRight>
                    <PriceLabel Tam="Com" Since={hotels[item].price} Currency="MX" Total='1736' />
                    <AddCheckList id={"id"+i} JustifyContent="flex-end" Margin="20px" />
                    <Link to="/manzanero/rooms">
                      <Button Title="Habitacion" Color="Blue" />
                    </Link>
                  </ColumMarginRight>
                </Row>
              </Wrapper>
            </Column>
            )}
          </DivRooms>
          <div>
            <MapView/>
          </div>
        </Div>
    </Container>
    );
  }
}

export default Hotels;
