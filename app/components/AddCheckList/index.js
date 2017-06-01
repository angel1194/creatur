/**
*
* AddCheckList
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';



function AddCheckList(props) {

  const AddElement = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content: ${props.JustifyContent};
`;

  return (
    <AddElement className="check-box">
      <input type="checkbox" id={props.id} name={props.name} />
      <label htmlFor={props.id}></label>{props.text}
    </AddElement>
  );
}

AddCheckList.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  JustifyContent: PropTypes.string
};

export default AddCheckList;
