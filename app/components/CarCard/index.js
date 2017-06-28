/**
*
* CarCard
*
*/

import React from 'react';
import styled from 'styled-components';
import {Checkbox} from 'semantic-ui-react'
import { browserHistory } from 'react-router'

const ContainerCard= styled.div`
  margin-left:20px;
  width:206px;
  height:190px;
  display:flex;
  flex-direction:column;
  border-radius:6px;
  border:1px solid #ccc;
  font-family:Roboto;
`;

const Header = styled.div`
  width:100%;
  height:40px;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:5px
`;

const DataContainer = styled.div`
  width:100%;
  height:80px;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
`;

const CarTitle= styled.label`
  font-size:18px;
  font-family:Roboto;
  color:#343434;
`;

const CarImg=styled.div`
  width:60%;
  height:100px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  padding:5px;
`;

const ContainerInfo=styled.div`
  width:100%;
  height:100%;

`;

const Total= styled.div`
  width:100%;
  height:50%;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  padding:5px
`;

const Label=styled.label`
  font-family:Roboto;
  font-size:18px;
  color:#195080;
  font-weight:bold;
`;

const Dolar= styled.label`
  font-family:Roboto;
  font-size:15px;
  color:#ccc;
`;

const CheckContainer= styled.div`
  width:100%;
  height:50%;
  display:flex;
  align-items:center
  justify-content:flex-end
  padding:5px
`;

const IconContainer = styled.div`
  width:100%;
  height:30px;
  display:flex;
  flex-direction:row;
  justify-content:space-around
  align-items:center;
  color:#6eb66e;
`;

const Button= styled.button`
  width:100%;
  height:38px;
  border-radius:0px 0px 6px 6px !important;
  color:white;
`;

function CarCard(props) {
    function ShortName(){
      var textAry = props.car.Name.split(' ')
      var indexOr = textAry.indexOf('or')
      var result = textAry.slice(0, indexOr)

      return result.toString().replace(/,/g," ")
    }
    function getCarCheck(e, data){
      props.addCarChecked(props.car.ID, data.checked)

    }
  return (
    <ContainerCard>
      <Header>
        <CarTitle>{ShortName()}</CarTitle>
        <img width='60' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/ico/${props.car.Vendor}.png`}/>
      </Header>
      <DataContainer>
        <CarImg>
          <img width='120' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/FleetImages/${props.car.PictureURL}`} />
        </CarImg>
        <ContainerInfo>
          <Total>
            <Label>${props.car.EstimatedTotalAmount}</Label>
            <Dolar>USD</Dolar>
          </Total>
          <CheckContainer>
            <Checkbox className='checkboxAvail' label='Cotizar' onChange={getCarCheck.bind(this)}/>
          </CheckContainer>
        </ContainerInfo>
      </DataContainer>
      <IconContainer>
        <span className='fa fa-users'> 4</span>
        <span className='fa fa-suitcase'> 4</span>
        {
          (props.car.AirConditionInd) == 'true' ?
            <span className="fa fa-snowflake-o" />
          : ''
        }
        <span className='fa fa-camera'>4</span>
        <span className='fa fa-camera'>4</span>
      </IconContainer>
      {
        (props.availableCar[props.car.ID]) ?
          <Button className="buttonCotizar secundary" onClick ={() => browserHistory.push('/quotation/')} ><span>Cotizar</span></Button>
          :  <Button className="buttonCotizar primary" onClick ={() => browserHistory.push(`/reserve/${props.car.ID}`)} ><span>Reservar</span></Button>
      }
    </ContainerCard>
  );
}

CarCard.propTypes = {

};

export default CarCard;
