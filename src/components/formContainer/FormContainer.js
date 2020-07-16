import React, { Component } from "react";
import InputText from "../inputText/InputText";
import Button from "@material-ui/core/Button";

class FormContainer extends Component {
  render() {
    const { onTxtChange, onSubmitBtnClick } = this.props;
    return (
      <div>
        <InputText
          onTextChange={onTxtChange}
          placeholder="Nama"
          type="text"
          name="name"
        />
        <InputText
          onTextChange={onTxtChange}
          placeholder="Alamat"
          type="text"
          name="address"
        />
        <InputText
          onTextChange={onTxtChange}
          placeholder="Usia"
          type="text"
          name="age"
        />
        <InputText
          onTextChange={onTxtChange}
          placeholder="Email"
          type="email"
          name="email"
        />
        <div style={{ marginTop: "10px" }}>
          <Button onClick={onSubmitBtnClick} color="primary">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default FormContainer;
