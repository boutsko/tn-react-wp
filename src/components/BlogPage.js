import React, {Component} from 'react';
import { assign, map } from 'lodash';
import BlogList from './BlogList';
import PieChart from './PieChart';

import request from 'superagent';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
        {},
        (err, res) => {
            return this.setState({ posts: res.body })}
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
    const columns = this.state.posts.map(post => [post.line, post.likes]);
    return (
      <div className="ui two column grid">
        <BlogList posts={this.state.posts} handleLike={this.handleLike}/>
        <PieChart columns={columns}/>
      </div>
    );
  }
}

export default BlogPage;

