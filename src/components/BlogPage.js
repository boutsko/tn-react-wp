import React, {Component} from 'react'
import BlogList from './BlogList'

class BlogPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
	posts: this.props.posts
  }

  handleLike = postId => ev => {
	const newPosts =  this.state.posts.map(post => {
	  post.id === postId && post.likes++
	  return post;
    })
    this.setState({ posts: newPosts });
  }

  render() {
    const posts = this.props

    return (
	  <div>
		<BlogList {...posts} handleLike={this.handleLike}/>
	  </div>
    );
  }
}

export default BlogPage
