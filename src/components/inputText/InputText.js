import React, { Component } from "react";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { onTextChange } = this.props;
    return (
      <input
        onChange={(event) => {
          onTextChange(event);
        }}
        type="text"
      />
    );
  }
}

export default InputText;
