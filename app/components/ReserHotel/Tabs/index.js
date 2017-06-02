import React,{ PropTypes } from 'react';
import styled from 'styled-components';

const Tab = styled.div`
  width:100%;
  height:50px;
  display:flex;
  flex-direction:row;
  margin-bottom:20px;
  border-radius:6px !important;
  border:1px solid #ccc;
`;

const DivTab = styled.div`
  width:33.33%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border:1px solid #ccc;
  border-radius: 6px 0px 0px 6px;

  &.position{
    background:#204f9e !important;
    color:white !important;
    font-weight:bold;
  }

`;

const DivTab2 = styled.div`
  width:33.33%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border:1px solid #ccc;

  &.position{
    background:#204f9e !important;
    color:white !important;
    font-weight:bold;
  }

`;

const DivTab3 = styled.div`
  width:33.33%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border:1px solid #ccc;
  border-radius: 0px 6px 6px 0px;

  &.position{
    background:#204f9e !important;
    color:white !important;
    font-weight:bold;
  }

`;

const Label = styled.label`
  font-family:Roboto !important;
  font-size:18px;
`;

function Tabs(props) {
  return (
        <Tab>
          <DivTab className={ props.selected == "1" ? 'position' : '' } >
            <Label>Detalles</Label>
          </DivTab>
          <DivTab2 className={ props.selected == '2' ? 'position' : '' }>
            <Label>Ingresa tus datos</Label>
          </DivTab2>
          <DivTab3 className={ props.selected == '3' ? 'position' : '' }>
            <Label>Pago</Label>
          </DivTab3>
        </Tab>
  );
}

Tabs.propTypes = {
  selected:PropTypes.string
};

export default Tabs;
