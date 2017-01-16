const React = require('react');

class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render(){

    var message = this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    );
  }  
}

module.exports = Bomb;