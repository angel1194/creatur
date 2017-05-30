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
    <AddElement className="">
      <input type="checkbox" value="None" id={props.id} name="check" />
      <label className="labelCheck" htmlFor={props.id}></label>{props.text}
    </AddElement>
  );
}

AddCheckList.propTypes = {
  text:PropTypes.string,
  id:PropTypes.string,
};

export default AddCheckList;
