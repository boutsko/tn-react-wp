import React, {Component} from 'react';
import { assign, map } from 'lodash';
import BlogList from './BlogList';
import PieChart from './PieChart';

import { posts } from '../fixtures';


class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    };
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
    const columns = posts.map(post => [post.line, post.likes]);
    return (
      <div className="ui two column grid">
        <BlogList posts={posts} handleLike={this.handleLike}/>
        <PieChart columns={columns}/>
      </div>
    );
  }
}

export default BlogPage;
