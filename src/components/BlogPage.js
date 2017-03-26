import React, {Component} from 'react'
import BlogList from './BlogList'

class BlogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props

    return (
      <div>
       <BlogList {...posts}/>
      </div>
    );
  }
}

export default BlogPage
