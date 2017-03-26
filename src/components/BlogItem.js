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
	const { id, line, image, meta, likes, handleLike } = this.props
    return (
      <div id={id}>
		<Like likes={likes} handleLike={handleLike(id)}/>
        <TextBox line={line}/>
        <Image {...image}/>
		<Meta {...meta}/>
      </div>
    );
  }
}

export default BlogItem
