import styled from 'styled-components';

import React, { PropTypes } from 'react';

const StyledImg = styled.img`
  margin:auto;
`;





function Img(props) {
  return (
    <StyledImg className={props.className} src={props.src} width={props.Width} />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  Width: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
