import React, { Component, PropTypes } from 'react'

class Like extends Component {

  static PropTypes = {
    likes: PropTypes.number 
  };

  static defaultProps = {
    likes: 0
  }
  
  state = {
    likes: this.props.likes
  }

  handleClick = (ev) => {
    this.setState({likes: this.state.likes + 1 })
  }
  
  render() {
    return (
      <div>
        <a href="#" onClick={this.handleClick}>{this.state.likes}</a>
      </div>
    )
  }
}

export default Like
