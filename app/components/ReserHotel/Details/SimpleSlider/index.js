/**
*
* SimpleSlider
*
*/

import React, {PropTypes} from 'react';
import Slider from 'react-slick'
import styled from 'styled-components';

const Div = styled.div`
  width: 86%;
`

class SimpleSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  render () {
    const settings = {
      //dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      accessibility: true
    };
    return (
      <Div>
        <Slider {...settings}>
          <div><img src="http://lorempixel.com/output/city-q-c-820-480-5.jpg"/></div>
          <div><img src="http://lorempixel.com/output/city-q-c-820-480-5.jpg" /></div>
          <div><img src="http://lorempixel.com/output/city-q-c-820-480-5.jpg" /></div>
          <div><img src="http://lorempixel.com/output/city-q-c-820-480-5.jpg" /></div>
        </Slider>
      </Div>
    );
  }
}

SimpleSlider.propTypes = {
};

export default SimpleSlider;
