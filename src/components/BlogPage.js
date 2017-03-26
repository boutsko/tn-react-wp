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

	//	incrementLikes(postId) {
	//    const newPosts =  map(this.state.posts, function(post) {
	const newPosts =  this.state.posts.map(post => {
	  if (post.id === postId) {
        ++post.likes;
	  }
	  return post;
    })
    this.setState({ posts: newPosts });

	
	/* this.setState({
	   ...this.props.posts,
	   ...this.props.posts[id]//: "foo"
	   })*/
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
