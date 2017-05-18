import React from 'react';

class ImageSlider extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  };
  render(){
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  };
}

module.exports = ImageSlider;
