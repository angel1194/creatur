/**
*
* SimpleSlider
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";


class SimpleSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleImageLoad(event) {
      console.log('Image loaded ', event.target)
    }

    render() {

      const Fonda =styled(ImageGallery)`
          width: 400px;
      `;


      const images = [
        {
          original: 'http://lorempixel.com/output/city-q-c-690-460-3.jpg',
          thumbnail: 'http://lorempixel.com/output/city-q-c-155-110-3.jpg',

        },
        {
          original: 'http://lorempixel.com/output/city-q-c-690-460-5.jpg',
          thumbnail: 'http://lorempixel.com/output/city-q-c-155-110-5.jpg'
        },
        {
          original: 'http://lorempixel.com/output/sports-q-c-690-460-6.jpg',
          thumbnail: 'http://lorempixel.com/output/sports-q-c-155-110-6.jpg'
        }
      ]

      return (
        <Fonda
          items={images}
          slideInterval={4000}
          onImageLoad={this.handleImageLoad}
          showPlayButton={false}
          showFullscreenButton={true}
          slideOnThumbnailHover={false}
          autoPlay={false}
          showIndex={true}
          showBullets={false}
        />

      );
    }
}

SimpleSlider.propTypes = {
};

export default SimpleSlider;
