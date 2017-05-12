/**
*
* InputIcon
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const ContainerInput = styled.div`
  width:100%;
  height:40px;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  box-shadow: inset 15px 3px 2px  #eaeaea;
  border:1px solid #ccc;
  margin-bottom:10px;
`;

const IconInput = styled.div`
  width:40px;
  height:39px;
  background-color:#87b672;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
  color:white;
`;

const Input = styled.input`
  width:100%;
  padding-left:10px;
`;

function InputIcon(props) {
  console.log(props);
  return (
    <ContainerInput>
      <IconInput>
        <FontAwesome name={props.name} />
      </IconInput>
      <Input type={props.type} placeholder={props.placeholder}/>
    </ContainerInput>
  );
}

InputIcon.propTypes = {
  name:PropTypes.string,
  type:PropTypes.string,
  placeholder:PropTypes.string,
};

export default InputIcon;
