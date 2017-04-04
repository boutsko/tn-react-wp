import React, {Component} from 'react'

import { Item } from 'semantic-ui-react'

import TextBox from './TextBox'
import Image from './Image'
import Meta from './Meta'
import Like from './Like'
import {style} from './style'

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, line, image, meta, likes, handleLike } = this.props
    return (
      <Item>
        <div className="ui three column grid" style={style}>
          <Item.Content>
            <Image {...image}/>
          </Item.Content>
          <Item.Header>
            <TextBox line={line}/>
            <Meta {...meta}/>
          </Item.Header>
          <Item.Content>
            <Like likes={likes} handleLike={handleLike(id)}/>
          </Item.Content>
        </div>
      </Item>
    );
  }
}

export default BlogItem
