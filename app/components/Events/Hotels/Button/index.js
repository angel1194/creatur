import React, { PropTypes } from 'react';
import { ButtonStyled, Title, Line, Arrow, Wrapper } from './StyledButton/ButtonStyled';

function Button(props) {
  return (
    <div>
      <ButtonStyled onClick={props.addComparation ? ()=> props.addComparation(props.item) : ''}>
        <Wrapper>
          <Title>{props.Title}</Title>

          <Title><Arrow name='angle-right' size="lg" /></Title>
        </Wrapper>
        <Line />
      </ButtonStyled>
    </div>
  );
}

export default Button;
