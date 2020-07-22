import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class InputText extends Component {
  render() {
    const { onTextChange, placeholder, type, name, valid, value } = this.props;
    return (
      <div className="input-text">
        <TextField
          required
          error={!valid}
          id={valid ? "outlined-required" : "outlined-error-helper-text"}
          helperText={
            valid
              ? ""
              : name === "email"
              ? "Invalid email or username"
              : "Password empty"
          }
          variant="outlined"
          label={placeholder}
          onChange={(event) => {
            onTextChange(event);
          }}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          size="small"
          style={{ width: "350px" }}
        />
      </div>
    );
  }
}

export default InputText;
