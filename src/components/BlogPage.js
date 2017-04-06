import React, {Component} from 'react';
import { assign, map } from 'lodash';
import BlogList from './BlogList';
import PieChart from './PieChart';

import request from 'superagent';

import { posts } from '../fixtures';


class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
    console.log("...", this.state.posts);
  }
  
  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }
  
  handleLike = postId => ev => {
    const postsClone = assign({}, this.state.posts);
    const newPosts = map(postsClone, (post) => {
      post.id === postId && ++post.likes;
      return post;
    });
    this.setState({ posts: newPosts });
  }

  render() {
    console.log("p---", posts)
//    const columns = posts.map(post => [post.line, post.likes]);
    return (
      <div className="ui two column grid">
        <BlogList posts={posts} handleLike={this.handleLike}/>

      </div>
    );
  }
}

export default BlogPage;

//<PieChart columns={columns}/>
