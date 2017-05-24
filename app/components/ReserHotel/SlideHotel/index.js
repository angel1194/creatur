/**
*
* SlideHotel
*
*/

import React from 'react';
import styled,{css} from 'styled-components';
import Slider from 'react-slick';
import First from './img/First.jpg'
import Second from './img/Second.jpg'


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
          <div><img src={First} /></div>
          <div><img src={Second} /></div>
        </Slider>
      </ContainerSlider>
    );
  }
}

SlideHotel.propTypes = {

};

export default SlideHotel;
