import React, { Component, PropTypes } from 'react'

class Like extends Component {

  static propTypes = {
    likes: PropTypes.number 
  };

  static defaultProps = {
    likes: 0
  }
  
  render() {
	const { likes, handleLike } = this.props
    return (
      <div>
        <a href="#" onClick={handleLike}>{likes}</a>
      </div>
    )
  }
}

export default Like

