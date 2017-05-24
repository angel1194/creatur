/**
*
* StarRating
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


const FontA = styled(FontAwesome) `
    color: #f5d21a !important;
    padding: 5px;
    padding-left: 0;
    font-weight: 900 !important;
 
    position: relative !important;

`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;


function addStar(num) {
  let ArrStars = [], i = 0;

  for (i = 0; i < num; i++) {
    ArrStars.push(<FontA name='star' />);
  }

  return ArrStars;

}

function generateStarts(num) {

  if (Number.isInteger(num)) {

    return addStar(num);

  } else {

    num = parseInt(num);
    let ArrStar = addStar(num);
    ArrStar.push(<FontA name='star-half' />);
    return ArrStar;
  }





}



function StarRating(props) {
  return (
    <Wrapper>
      {generateStarts(props.NumStart)}
    </Wrapper>
  );
}

StarRating.propTypes = {
  NumStart: PropTypes.number
};

export default StarRating;
