import React, {Component} from 'react'
import TextBox from './TextBox'
import Image from './Image'
import Meta from './Meta'
import Like from './Like'

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	const { line, image, meta, likes } = this.props
    return (
      <div>
		<Like likes={likes} />
        <TextBox line={line}/>
        <Image {...image}/>
		<Meta {...meta}/>
      </div>
    );
  }
}

export default BlogItem
