import React, {Component} from 'react'

import { Item } from 'semantic-ui-react'

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
      <Item>
        <div className="ui three column grid"
             style={{
               border: '1px solid green'
               , width: '500px'
               , margin: '20px 20px 20px 20px'
               , padding: '20px 20px 20px 20px'
             }}>
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
