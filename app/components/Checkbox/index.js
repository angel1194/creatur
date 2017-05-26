/**
*
* Checkbox
*
*/

import React,{PropTypes} from 'react';
import styled from 'styled-components';

const Radio=styled.div`
&.radio {
  padding:0px;
  margin-left: -10px;
}

&.radio input[type=checkbox]{
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
  width:17px;
  height:17px;
  background:none;
  display:inline-block;
  border:2px solid #87b672;
  border-radius:20%;
  position:absolute;
  left:10px;
  top:6px;
}

&.radio input[type=checkbox]:checked + label:before{
  background:#87b672;
}

`;
function Checkbox(props) {
  return (
    <Radio className='radio'>
      <input type='checkbox' id={props.ID} name={props.name}/>
      <label htmlFor={props.ID}>{props.text}</label>
    </Radio>
  );
}

Checkbox.propTypes = {
  ID:PropTypes.string,
  text:PropTypes.string,
  name:PropTypes.string,
};

export default Checkbox;
