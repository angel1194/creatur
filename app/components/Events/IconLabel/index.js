import React from 'react';
import styled from 'styled-components';
import fontAwesome from 'react-fontawesome';


const ContainerButton = styled.div`
  box-shadow:1px 1px 4px #000 inset;
  width:90%;
  height:40px;
  margin-top:10px;
  border-radius:6px;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:flex-start;
  align-items:center;
  color:#2b5bac;
  padding:5px;
  &.iconButton:hover{
    background-color: #2b5bac;
    color:white;
    cursor:pointer
    /*#0080FF*/
  }
`;

const Icon = styled(fontAwesome)`
  font-size:20px;

`;

const Span= styled.span`
  font-size:16px;
  margin-left:10px;
`;

function IconLabel(props){
  return (
    <ContainerButton className='iconButton'>
      <Icon name={props.Icon}/>
      <Span>{ props.Text }</Span>
    </ContainerButton>
  )
}

export default IconLabel;
