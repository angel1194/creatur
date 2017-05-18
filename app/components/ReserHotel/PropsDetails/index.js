/**
*
* PropsDetails
*
*/

import React, { PropTypes }  from 'react';
import styled from 'styled-components';

const A = styled.a `
   color: ;
`;

function PropsDetails(props) {
  return (
    <div>
      <A>${props.Ancor}</A>
    </div>
  );
}

PropsD.propTypes = {
  Ancor: PropTypes.string
};

export default PropsDetails;
