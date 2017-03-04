import React, {Component} from 'react'

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt}
      />
    );
  }
}

export default Image
