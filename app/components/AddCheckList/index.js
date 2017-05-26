/**
*
* AddCheckList
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

const GreenIcon=styled(FontAwesome)`
  color:#87B672 !important;
  cursor:pointer;
`;

const LabelElement=styled.label`
  margin-left:5px
  color:#5E5E5E;
  cursor:pointer;
`;

function AddCheckList(props) {
  return (
    <AddElement>
      <GreenIcon  name='check-square-o' size='lg' />
      <LabelElement htmlFor='addElement'>
        {props.text}
      </LabelElement>
    </AddElement>
  );
}

AddCheckList.propTypes = {
  text:PropTypes.string,
  id:PropTypes.string,
};

export default AddCheckList;
