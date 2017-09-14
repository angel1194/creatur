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
// import AddCheckList from '../../AddCheckList';
// import OffersDay from './OffersDay';
// import Rooms from '../../../containers/Events/Rooms';

const ColumMarginRight = styled(Column) `
  margin: 10px 10px 0px 0px;
  padding: 10px 20px 12px 20px;
  align-items: flex-end;
  border-left: 2px solid #eaeff3;
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
    // this.setShowRooms=this.setShowRooms.bind(this)
    // this.setFalse=this.setFalse.bind(this)
  }

  // setShowRooms(){
  //   this.setState({
  //     showRooms: true
  //   })
  // }

  // setFalse(){
  //   this.setState({
  //     showRooms: false
  //   })
  // }

  render() {
    return (
      <Container>
        <Column>
          <Wrapper>
            <Row>
              <Img src={this.props.elements.image} Width="200px" Height="156px" />
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
                {/* <AddCheckList id={"id" + this.props.elements.name} JustifyContent="flex-end" text={"Por 4 noches"}/> */}
                <br/><br/><br/>
                <Button Title="Habitaciónes" Color="Blue" addComparation={this.props.addComparation} item={this.props.elements}/>
              </ColumMarginRight>
            </Row>
          </Wrapper>
          {/* <OffersDay
            setShowRooms={this.state.showRooms === false ? this.setShowRooms : this.setFalse}
            state={this.state.showRooms}
            rooms={this.props.elements.rooms}
            addRooms={(rooms)=>this.props.addRooms(rooms)}
          /> */}
        </Column>
      </Container>
    );
  }
}

export default Hotels;
