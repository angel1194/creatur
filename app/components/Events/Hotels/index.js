import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router';
import { Wrapper, WrapperTrans, Column, Row, Title, Img } from '../../ReserHotel/RowHotel/StyledRowH/StyledRowH';
import StarRating from '../../ReserHotel/StarRating';
import TripAdvisor from '../../ReserHotel/TripAdvisor';
import LocationLabel from '../../ReserHotel/LocationLabel';
import PriceLabel from '../../ReserHotel/PriceLabel';
import Button from '../../ReserHotel/Button';
import OffersDay from '../../ReserHotel/OffersDay';
import AddCheckList from '../../AddCheckList';
import MapView from '../../ReserHotel/MapView'

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

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DivRooms = styled.div`
  width: 75%;
`;

class Hotels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hotels: {
        '001':{
          image:"http://cdn.precioyviajes.com/00/13/40/00134083_gp.jpg",
          title:'Best Western Maya Yucatán',
          price:'434.80',
          numStart:4,
          location:'Mérida',
        },
        '002':{
          image:"https://images.bestday.com/_lib/vimages/Merida_Yucatan/Hotels/Hotel-Casa-Lucia/Fachada_t.jpg",
          title:'Hotel Casa Lucía',
          price:'2452',
          numStart:4.5,
          location:'Mérida - Zona Centro',
        },
        '003':{
          image:"https://media-cdn.tripadvisor.com/media/photo-s/09/b9/7f/4a/hotel-residencial.jpg",
          title:'Hotel Residencial',
          price:'647',
          numStart:3,
          location:'Mérida',
        }
      }
    }
  }
  render() {
    const {hotels} = this.state

    return (
      <Div>
        <DivRooms>
          {Object.keys(hotels).map((item, i)=>
          <Column key={i}>
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
                  {/* <Link to="/hotel/quotation"> */}
                    <Button Title="Habitacion" Color="Blue" />
                  {/* </Link> */}
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
    );
  }
}

export default Hotels;
