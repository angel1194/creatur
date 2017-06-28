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
    background: -webkit-gradient(linear, left top, left bottom, from(#feee00), to(#e19155));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;


function addStar(num) {
  let ArrStars = [], i = 0;

  for (i = 0; i < num; i++) {
    ArrStars.push(<FontA name='star' key={i}/>);
  }

  return ArrStars;

}

function generateStarts(num) {

  num = parseFloat(num);

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
