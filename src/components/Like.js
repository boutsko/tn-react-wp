import React, { PropTypes } from 'react'

function Like (props) {
  const { likes, handleLike } = props
  return (
    <div>
      <a href="#" onClick={handleLike}>{likes}</a>
    </div>
  )
}

Like.propTypes = {
  likes: PropTypes.number,
  handleLike: PropTypes.func
};

Like.defaultProps = {
  likes: 0
}

export default Like
