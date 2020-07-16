import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
    );
  }
}

export default Button;
