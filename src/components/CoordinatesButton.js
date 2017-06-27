import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleOnClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render() {
    return(
      <button onClick={this.handleOnClick}></button>
    )
  }
}

export default CoordinatesButton
