import React, { Component, PropTypes } from 'react';

import { posts } from '../fixtures'

import BlogItem from './BlogItem';

import { Item } from 'semantic-ui-react';

//const Post = ({ params }) => (
class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleLike, params } = this.props;
    return(
      <Item.Group>
        <BlogItem post={posts[params.id-1]} handleLike={()=>(1)} />
        <p>Hello</p>
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
}

export default Post;
