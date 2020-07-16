import React, { Component } from "react";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { onTextChange, placeholder, type, name } = this.props;
    return (
      <div>
        <input
          onChange={(event) => {
            onTextChange(event);
          }}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    );
  }
}

export default InputText;
