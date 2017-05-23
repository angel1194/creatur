/**
*
* MainSlider
*
*/

import React from 'react';
import Slider from 'react-slick'
import Img from './img/viaje.png'
import Img2 from './img/viaje.jpg'
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

    }
    return (
      <Slider {...settings}>
        <div><img src={Img} /></div>
        <div><img src={ Img2 } /></div>
        <div><img src="http://lorempixel.com/1200/540/people/3/" /></div>
        <div><img src="http://lorempixel.com/1200/540/people/4/" /></div>
        <div><img src="http://lorempixel.com/1200/540/people/5/" /></div>
        <div><img src="http://lorempixel.com/1200/540/people/6/" /></div>
      </Slider>
    );
  }
}

MainSlider.propTypes = {

};

export default MainSlider;
