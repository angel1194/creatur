import styled from 'styled-components';

import React, { PropTypes } from 'react';

function Img(props) {
  return (
    <img className={props.className} src={props.src} width={props.Width} height={props.Height} />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  Height: PropTypes.string.isRequired,
  Width: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;