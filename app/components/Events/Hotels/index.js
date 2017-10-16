import React from 'react';
import styled from 'styled-components';
import {Container} from 'semantic-ui-react';
import { Link } from 'react-router';
import { Wrapper, WrapperTrans, Column, Row, Title, Img } from './StyledRowH/StyledRowH';
import StarRating from '../../ReserHotel/StarRating';
import TripAdvisor from '../../ReserHotel/TripAdvisor';
import LocationLabel from './LocationLabel';
import PriceLabel from './PriceLabel';
import Button from './Button';
import RoomImg from './style';

const ColumMarginRight = styled(Column) `
  margin: 10px 10px 0px 0px;
  padding: 10px 20px 12px 20px;
  align-items: flex-end;
  border-left: 2px solid #eaeff3;
  /*  Responsive*/
  @media only screen and (max-width: 500px) and (min-width: 412px){
    margin-top: -5px;
    height: 100px;
  }
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
  }

  render() {
    return (
      <Container>
        <Column>
          <Wrapper>
            <Row>

              <Img src={this.props.elements.image} Width="290px" Height="156px" />
              <ColumMarginTop>
                <Title>{this.props.elements.name}</Title>
                <StarRating key={this.props.elements.key} NumStart={Number(this.props.elements.star)}/><br/>
                <TripAdvisor Calification='0'/>
                <LocationLabel Title={this.props.elements.address}/>
              </ColumMarginTop>
            </Row>
            <Row>
              <ColumMarginRight>
                <PriceLabel Since={this.props.elements.rooms[0].price} Currency="MXN"/>
                <br/><br/><br/>
                <Button Title="Habitaciones" Color="Blue" addComparation={this.props.addComparation} item={this.props.elements}/>
              </ColumMarginRight>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    );
  }
}

export default Hotels;
