import React, {Component} from 'react'
import TextBox from './TextBox'
import Image from './Image'
import Meta from './Meta'

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	const { line, image, meta } = this.props
    return (
      <div>
        <TextBox line={line}/>
        <Image {...image}/>
		<Meta {...meta}/>
      </div>
    );
  }
}

export default BlogItem
