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

function AddButton(props) {
  return (
    <AddElement>
      <BlueIcon name='plus-circle' size='lg' id='addElement'/>
      <LabelElement htmlFor='addElement'>
        {props.text}
      </LabelElement>
    </AddElement>
  );
}

AddButton.propTypes = {
  text:PropTypes.string,
};

export default AddButton;
