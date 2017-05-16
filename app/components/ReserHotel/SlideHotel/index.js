/**
*
* SlideHotel
*
*/

import React from 'react';
import styled,{css} from 'styled-components';
import Slider from 'react-slick';

const ContainerSlider=styled.div`
  width:35%;
  height:245px !important;
  border-bottom:1px solid #eaeaea;
`;


class SlideHotel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  render() {
    const settings = {
      className: 'slideImg',
      infinite: true,
      lazyLoad: true,
      speed: 4000,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:true,
    }
    return (
      <ContainerSlider>
        <Slider {...settings}>
          <div><img src="http://lorempixel.com/316/245/transport/1/" /></div>
          <div><img src="http://lorempixel.com/316/245/transport/2/" /></div>
          <div><img src="http://lorempixel.com/316/245/transport/3/" /></div>
          <div><img src="http://lorempixel.com/316/245/transport/4/" /></div>
          <div><img src="http://lorempixel.com/316/245/transport/5/" /></div>
          <div><img src="http://lorempixel.com/316/245/transport/6/" /></div>
        </Slider>
      </ContainerSlider>
    );
  }
}

SlideHotel.propTypes = {

};

export default SlideHotel;
