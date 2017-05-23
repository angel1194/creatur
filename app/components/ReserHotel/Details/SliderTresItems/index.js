/**
*
* SliderTresItems
*
*/

import React, {PropTypes} from 'react';
import Slider from 'react-slick'
import styled from 'styled-components';

const Div = styled.div`
  width: 70%;
  margin-left: 80px;
`
const Img = styled.img`
  margin-top: 15px;
  width: 90%;
`

class SliderTresItems extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  render () {
    const settings = {
      //dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      arrows: true,
      centerMode: true
    };
    return (
      <Div>
        <Slider {...settings}>
          <div><Img src="http://lorempixel.com/output/city-q-c-220-100-8.jpg"/></div>
          <div><Img src="http://lorempixel.com/output/city-q-c-220-100-8.jpg" /></div>
          <div><Img src="http://lorempixel.com/output/city-q-c-220-100-8.jpg" /></div>
          <div><Img src="http://lorempixel.com/output/city-q-c-220-100-8.jpg" /></div>
          <div><Img src="http://lorempixel.com/output/city-q-c-220-100-8.jpg" /></div>
          <div><Img src="http://lorempixel.com/output/city-q-c-220-100-8.jpg" /></div>
        </Slider>
      </Div>
    );
  }
}

SliderTresItems.propTypes = {

};

export default SliderTresItems;
