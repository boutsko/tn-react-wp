import React, {PropTypes, Component} from 'react';

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

TextBox.propTypes = {
  line: PropTypes.string,
  children: PropTypes.element
};

export default TextBox;
