/**
*
* InputLabel
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Wrapper, InputText, InputNum, SmallText } from './StyledNL/StyledNL';

function InputLabel(props) {

  console.log(props.Type);

  let Input;
  switch (props.Type) {
    case "text":
      Input = (
        <Wrapper>
          <SmallText>{props.Title}</SmallText>
          <InputText type={props.Type} placeholder={props.Placeholder} />
        </Wrapper>
      );
      break;
    case "date":
      Input = (
        <Wrapper>
          <SmallText>{props.Title}</SmallText>
          <InputText type={props.Type} placeholder={props.Placeholder} />
        </Wrapper>
      );
      break;
    case "number":
      Input = (
        <Wrapper>
          <SmallText>{props.Title}</SmallText>
         
            <InputNum type={props.Type} placeholder={props.Placeholder} />
         
        </Wrapper>
      );
      break;

    default:
      Input = (
        <Wrapper>
          <SmallText>{props.Title}</SmallText>
          <InputText type={props.Type} placeholder="" />
        </Wrapper>
      );
      break;
  }


  return Input;
}

InputLabel.propTypes = {
  Type: PropTypes.string,
  Tile: PropTypes.string,
  Placeholder: PropTypes.string
};

export default InputLabel;
