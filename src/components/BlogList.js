import React, {Component} from 'react'
import BlogItem from './BlogItem'

class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {posts} = this.props
    const blogItemComponents = posts.map(post => <BlogItem {...post} handleLike={this.props.handleLike} />)

    return (
      <div>
        {blogItemComponents}
      </div>
    );
  }
}

export default BlogList
