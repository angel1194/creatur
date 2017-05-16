/**
*
* RadioButtonGreen
*
*/

import React,{PropTypes} from 'react';
import styled from 'styled-components';

const Radio=styled.div`
&.radio {
  padding:0px;
}

&.radio input[type=radio]{
  display:none;
}

&.radio label{
  padding: 5px 15px 0px 30px;
  display:inline-block;
  position:relative;
  font-size:1em;
  cursor:pointer;
  transition:all 0.3s ease;
}

&.radio label:before{
  content:'';
  width:15px;
  height:15px;
  background:none;
  display:inline-block;
  border:2px solid #87b672;
  border-radius:50%;
  position:absolute;
  left:10px;
  top:6px;
}

&.radio input[type=radio]:checked + label:before{
  background:#87b672;
}

`;

function RadioButtonGreen(props) {
  return (
    <Radio className='radio'>
      <input type='radio' id={props.ID} name={props.name}/>
      <label htmlFor={props.ID}>{props.text}</label>
    </Radio>
  );
}

RadioButtonGreen.propTypes = {
  ID:PropTypes.string,
  text:PropTypes.string,
  name:PropTypes.string,
};

export default RadioButtonGreen;
