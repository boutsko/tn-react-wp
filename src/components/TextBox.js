import React, {Component} from 'react'

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="row">
        {this.props.line}{this.props.children}
      </span>
    );
  }
}

export default TextBox
