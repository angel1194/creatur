/**
*
* TextArea
*
*/

import React,{PropTypes} from 'react';
import styled from 'styled-components';

const DivTextArea = styled.div`
  width:100%;
  height:100px;
  border:1px solid #ccc;
  box-shadow: inset 2px 2px 2px  #eaeaea;
  margin-top:10px;
  margin-bottom:10px;
`;
const TextAreaInput = styled.textarea`
  width:100%;
  height:100%;
  padding-left:5px;
  max-height:100px;
`;
function TextArea(props) {
  return (
    <DivTextArea>
      <TextAreaInput placeholder={props.placeholder}>
      </TextAreaInput>
    </DivTextArea>
  );
}

TextArea.propTypes = {
  placeholder:PropTypes.string,
};

export default TextArea;
