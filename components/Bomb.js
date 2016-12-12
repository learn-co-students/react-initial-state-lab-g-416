const React = require('react')


class Bomb extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {

    const secondCount = this.state.secondsLeft > 0 ? this.state.secondsLeft +  ' seconds left before I go boom!': 'Boom!'
  return(
    <p>{secondCount}</p>
  )
}

}

module.exports = Bomb
