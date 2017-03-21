import  React, { Component, PropTypes } from 'react'
import TextBox from "./TextBox"

class Author extends Component {
  static propTypes = {
	name: PropTypes.string
  }

  static defaultProps = {
	name: '-===-'
  } 

  render() {
	console.log("author:", this.props)
	const { name } = this.props
    return (
      <div>
        <TextBox line={name}/>
      </div>
    );
  }
}

export default Author