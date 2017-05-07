const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    if (this.state.secondsLeft == 0) {
      var message = "Boom!";
    } else {
      var message = `${this.state.secondsLeft} seconds left before I go boom!`;
    }

    return (
      <div>{message}</div> 
    );
  }
}

module.exports = Bomb;