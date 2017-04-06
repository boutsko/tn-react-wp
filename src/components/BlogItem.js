import React, { PropTypes, Component} from 'react';

import { Item } from 'semantic-ui-react';

import TextBox from './TextBox';
import Image from './Image';
import Meta from './Meta';
import Like from './Like';
import {style} from './style';
import Link from 'components/elements/Link';

import { postsPath } from 'helpers/routes';

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id, line, image, meta, likes } = this.props
    const { handleLike } =  this.props
    return (
      <Item>
        <div className="ui three column grid" style={style}>
          <Item.Content>
            <Image {...image}/>
          </Item.Content>
          <Item.Content>
            <Item.Header>
              <Link to={postsPath(id)}>
                <TextBox line={line}/>
              </Link>
            </Item.Header>
            <Meta {...meta}/>
          </Item.Content>
          <Item.Content>
            <Like likes={likes} handleLike={handleLike(id)}/>
          </Item.Content>
        </div>
      </Item>
    );
  }
}

BlogItem.propTypes = {
  id: PropTypes.number,
  line: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.object,
  likes: PropTypes.number,
  handleLike: PropTypes.func
};

export default BlogItem;
