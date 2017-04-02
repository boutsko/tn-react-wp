import React, { Component, PropTypes } from 'react'

import { Item, Icon } from 'semantic-ui-react';

import FormattedDate from './FormattedDate'
import Author from './Author'
import TextBox from './TextBox'

class Meta extends Component {
  static propTypes = {
    author: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    updatedAt: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    author: "Anonimous",
    createdAt: new Date(),
    updatedAt: new Date()
  };

  render() {
    const { author, createdAt, updatedAt } = this.props
    return (
      <Item.Content>
        <Author name={author} />
        <div>
          <Icon name='calendar outline'/>
          <TextBox line="Created : "><FormattedDate>{createdAt}</FormattedDate></TextBox>
        </div>
        <div>
          <Icon name='calendar outline'/>
          <TextBox line="Updated : "><FormattedDate>{updatedAt}</FormattedDate></TextBox>
        </div>
      </Item.Content>
    );
  }
}

export default Meta
