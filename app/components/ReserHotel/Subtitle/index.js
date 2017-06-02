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

const A = styled.p `
  color: #87b672;
  margin: 2px 0px 0px 123px;
  text-decoration: underline;
`;

const Ubication = styled.div `
  color: #3498db;
  text-decoration: underline;
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
      <A>
        {props.Ancor}
      </A>
      <Ubication>
        {props.AncorUbication}
      </Ubication>
    </div>
  );
}

Subtitle.propTypes = {
  GlobalText: PropTypes.string,
  TextGrey: PropTypes.string,
  Ancor: PropTypes.string,
  AncorUbication: PropTypes.string
};

export default Subtitle;
