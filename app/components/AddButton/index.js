/**
*
* AddButton
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const AddElement = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content: flex-end;
`;


const Input = styled.input`
      visibility: hidden;
`;

const BlueIcon=styled(FontAwesome)`
  color:#2b5bac !important;
  cursor:pointer;
`;

const LabelElement=styled.label`
  margin-left:5px
  color:#b2b2b2;
  cursor:pointer;
`;

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function AddButton(props) {

  let idUnique = guidGenerator();

  return (
    <AddElement onClick={props.setShowRooms ? ()=>props.setShowRooms() : ''}>
      <BlueIcon name={props.state === false ? 'plus-circle' : props.state === true ? 'minus-circle' : 'plus-circle'} size='lg' id='addElement'/>
      <LabelElement htmlFor={props.setShowRooms ? '' : idUnique}>
        {props.text}
      </LabelElement>
      <Input type='checkbox'  id={idUnique} />
    </AddElement>
  );
}

AddButton.propTypes = {
  text:PropTypes.string,
};

export default AddButton;
