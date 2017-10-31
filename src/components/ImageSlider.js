// Bomb Component Code Goes Here
import React from 'react';

export default class ImageSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }

}
