/**
*
* Button
*
*/

import React, { PropTypes } from 'react';
import { ButtonStyled, Title, Line, Arrow, Wrapper } from './StyledButton/ButtonStyled';


// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


function Button(props) {
  return (
    <div>
      <ButtonStyled>
        <Wrapper>
          <Title>{props.Title}</Title>

          <Title><Arrow name='angle-right' size="lg" /></Title>
        </Wrapper>
        <Line />
      </ButtonStyled>
    </div>
  );
}

Button.propTypes = {
  Title: PropTypes.string,
  Color: PropTypes.string,
};

export default Button;
