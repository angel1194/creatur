/**
*
* WrapperFlex
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';



const WrapperFlex = styled.div`

   margin: 4px;
   padding: 0;
   border: 1px solid #eaeff3;
   background: transparent;
   -webkit-flex: ${(props) => props.Grow} ${(props) => props.Shrink} ${(props) => props.Basis}%;
           flex: ${(props) => props.Grow} ${(props) => props.Shrink} ${(props) => props.Basis}%;
   -webkit-order: ${(props) => props.Order};
           order: ${(props) => props.Order};
   ${ (props) => props.Overflow ? 'overflow: scroll': '' }

`;



WrapperFlex.propTypes = {
        Order: PropTypes.number,
        Grow: PropTypes.number,
        Shrink: PropTypes.number,
        Basis: PropTypes.number,
        Overflow : PropTypes.string
};

export default WrapperFlex;
