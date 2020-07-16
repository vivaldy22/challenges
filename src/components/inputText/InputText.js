import React, { Component } from "react";
import { TextField } from "@material-ui/core";

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
      <div style={{ marginTop: "10px" }}>
        <TextField
          required
          id="standard-basic"
          label={placeholder}
          onChange={(event) => {
            onTextChange(event);
          }}
          type={type}
          placeholder={placeholder}
          name={name}
          size="small"
        />
      </div>
    );
  }
}

export default InputText;
