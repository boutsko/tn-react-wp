import React, {Component} from 'react'
import TextBox from './TextBox'
import Image from './Image'

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <TextBox string={this.props.string}/>
        <Image {...this.props.image}/>
      </div>
    );
  }
}

export default BlogItem
