import React, { Component, PropTypes } from 'react'

import FormattedDate from './FormattedDate'
import Author from './Author'
import TextBox from './TextBox'

class Meta extends Component {
  static propTypes = {
    author: PropTypes.string,
    created_at: PropTypes.instanceOf(Date),
    updated_at: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    author: "Anonimous",
    created_at: new Date(),
    updated_at: new Date()
  };

  render() {
    console.log("meta:", this.props)
    const { author, created_at, updated_at } = this.props
    return (
      <div>
        <Author name={author} />
        <TextBox line="Created : "><FormattedDate>{created_at}</FormattedDate></TextBox>
        <TextBox line="Updated : "><FormattedDate>{updated_at}</FormattedDate></TextBox>
      </div>
    );
  }
}

export default Meta
