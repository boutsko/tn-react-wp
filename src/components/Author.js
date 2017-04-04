import  React, { Component, PropTypes } from 'react';
import TextBox from "./TextBox";

class Author extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: '-===-'
  }

  render() {
    const { name } = this.props;
    return (
        <div>
          <span>Author: <TextBox line={name}/></span>
        </div>
    );
  }
}

export default Author;
