import React, {Component} from 'react'
import BlogItem from './BlogItem'

class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts, handleLike } = this.props
    const blogItemComponents = posts.map(post =>
      <BlogItem key={post.id} {...post}
                handleLike={handleLike} />)

    return (
      <div>
        {blogItemComponents}
      </div>
    );
  }
}

export default BlogList
