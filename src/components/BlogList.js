import React, {PropTypes, Component} from 'react';
import BlogItem from './BlogItem';

class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts, handleLike } = this.props;
    const blogItemComponents = posts.map(post =>
      <BlogItem key={post.id} {...post}
        handleLike={handleLike} />);

    return (
      <div>
        {blogItemComponents}
      </div>
    );
  }
}

BlogList.propTypes = {
  posts: PropTypes.array,
  handleLike: PropTypes.func
};

export default BlogList;
