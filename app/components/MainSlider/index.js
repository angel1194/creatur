/**
*
* MainSlider
*
*/

import React from 'react';
import Slider from 'react-slick'
import Img from './img/2.jpg'
import Img2 from './img/3.jpg'
// import styled from 'styled-components';


class MainSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  render() {
    const settings = {
      className: 'slideImg',
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:false

    }
    return (
      <Slider {...settings}>
        <div><img src={Img} /></div>
        <div><img src={ Img2 } /></div>
      </Slider>
    );
  }
}

MainSlider.propTypes = {

};

export default MainSlider;
