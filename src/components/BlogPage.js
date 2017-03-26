import React, {Component} from 'react'
import BlogList from './BlogList'
import PieChart from './PieChart'

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
	const columns = this.props.posts.map(post => [post.line, post.likes])
	
    return (
	  <div>
		<BlogList {...posts} handleLike={this.handleLike}/>
		<PieChart columns={columns}/>
	  </div>
    );
  }
}

export default BlogPage
