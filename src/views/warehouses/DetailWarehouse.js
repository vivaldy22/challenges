import React, { Component } from "react";
import { Form, Input, Modal, Label, Button, Dropdown } from "semantic-ui-react";
import { createGoods, updateGoods } from "../../api/Goods";

class DetailWarehouse extends Component {
  state = {
    good: this.props.name,
    type: this.props.type,
    typeID: this.props.typeID,
    isEditing: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleTypeChange = (e, { value }) => {
    this.setState({
      ...this.state,
      typeID: value,
    });
    console.log("typeID ", this.state.typeID);
  };

  handleEditClick = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleSaveClick = () => {
    const data = {
      name: this.state.good,
      type: this.state.typeID,
    };
    if (this.props.btnName === "Add New") {
      createGoods(data).then((res) => {
        console.log(res);
        alert("Insert success");
      });
    } else if (this.props.btnName === "Edit") {
      updateGoods(this.props.goodID, data).then((res) => {
        console.log(res);
        alert("Update success");
      });
    }
    this.handleEditClick();
    this.resetState();
    window.location.reload(false);
  };

  resetState = () => {
    this.setState({
      name: "",
      isEditing: false,
    });
  };

  render() {
    const { button, options, open, onClose, btnName } = this.props;
    const { good, type, typeID, isEditing } = this.state;

    return (
      <Modal open={open} trigger={button}>
        <Modal.Header>Goods Data</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <Label>Goods Name</Label>
                <Input
                  name="good"
                  disabled={!isEditing}
                  value={good}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Label>Goods Type</Label>
                <Dropdown
                  disabled={!isEditing}
                  fluid
                  selection
                  options={options}
                  defaultValue={typeID}
                  defaultSelectedLabel={type}
                  onChange={this.handleTypeChange}
                />
              </Form.Field>
              <div>
                <Button
                  onClick={
                    isEditing ? this.handleSaveClick : this.handleEditClick
                  }
                  color="green"
                >
                  {isEditing ? "Save" : btnName}
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    this.resetState();
                  }}
                  color="red"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default DetailWarehouse;
