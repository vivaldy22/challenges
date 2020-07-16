import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class InputText extends Component {
  render() {
    const { onTextChange, placeholder, type, name } = this.props;
    return (
      <div className="input-text">
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
