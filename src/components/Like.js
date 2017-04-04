import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

function Like (props) {
  const { likes, handleLike } = props;
  return (
    <span>Likes : &nbsp;
      <Button onClick={handleLike}>
      {likes}
      </Button>
    </span>
  );
}

Like.propTypes = {
  likes: PropTypes.number,
  handleLike: PropTypes.func
};

Like.defaultProps = {
  likes: 0
};

export default Like;
