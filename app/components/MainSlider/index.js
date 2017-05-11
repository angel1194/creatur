/**
*
* MainSlider
*
*/

import React from 'react';
import Slider from 'react-slick'
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
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      responsive:[{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 4000,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 4000,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4000,
        }
      }]
    }
    return (
      <Slider {...settings}>
        <div><img src="http://lorempixel.com/1200/540/transport/1/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/2/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/3/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/4/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/5/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/6/" /></div>
      </Slider>
    );
  }
}

MainSlider.propTypes = {

};

export default MainSlider;
