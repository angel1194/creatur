/**
*
* CollapseSection
*
*/

import React, { PropTypes } from 'react';


import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FontAwesome from 'react-fontawesome';
import Wrapper from './StyledCS/Wrapper';
import CheckBoxCS from './StyledCS/CheckBoxCS';
import Container from './StyledCS/Container';
import SubTitle from './StyledCS/SubTitle';
import H3 from '../../../components/ReserHotel/H3';
import '../../../fonts/FontAwesome.otf';
import styled, {css} from 'styled-components';


const FontA = styled(FontAwesome) `
    color: #87b672 !important;
    
    font-weight: 900 !important;
    top:-10px !important;
    position: relative !important;

`;

const ModiCon = css`
justify-content : space-between;
`;

const NewContent = styled(Container)`${
  ModiCon
}`;



function CollapseSection(props) {
  return (
    <Wrapper>
      <NewContent>
        <H3>{props.Title}</H3>
        <FontA name='angle-up' size="2x" />
      </NewContent>
      <Container>
        <CheckBoxCS className="checkboxFour">
          <input type="checkbox" value="1" id={props.ID} name="" />
          <label htmlFor={props.ID}></label>
        </CheckBoxCS>
        <SubTitle>{props.SubTitles}</SubTitle>
      </Container>

    </Wrapper>
  );
}

CollapseSection.propTypes = {
  Title: PropTypes.string,
  SubTitles: PropTypes.string,
  ID: PropTypes.string
};

export default CollapseSection;
