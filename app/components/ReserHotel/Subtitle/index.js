/**
*
* Subtitle
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextP from './StyledS/TextP';

const Color = styled.p`
   font-family: Roboto;
   color: grey;
   margin-left: 10px;
`;

function Subtitle(props) {
  return (
    <div>
      <TextP>
        {props.GlobalText}
      </TextP>
      <Color>
        {props.TextGrey}
      </Color>
    </div>
  );
}

Subtitle.propTypes = {
  GlobalText: PropTypes.string,
  TextGrey: PropTypes.string
};

export default Subtitle;
