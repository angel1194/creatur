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
`;

function AddCheckList(props) {
  return (
    <AddElement className="check-box">
      <input type="checkbox" id={props.id} name={props.name} />
      <label htmlFor={props.id}></label>{props.text}
    </AddElement>
  );
}

AddCheckList.propTypes = {
  text:PropTypes.string,
  id:PropTypes.string,
  name:PropTypes.string
};

export default AddCheckList;
