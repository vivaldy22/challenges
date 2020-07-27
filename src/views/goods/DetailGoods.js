import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Label, Button, Dropdown } from "semantic-ui-react";
import { createGoods, updateGoods } from "../../api/Goods";

const DetailGoods = (props) => {
  const initialState = {
    good: props.name || "",
    type: props.type || props.options[0].text,
    typeID: props.typeID || props.options[0].value,
  };

  const [userInput, setUserInput] = useState(initialState);

  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setUserInput({
      ...userInput,
      good: e.target.value,
    });
  };

  const handleTypeChange = (e, { value }) => {
    setUserInput({
      ...userInput,
      typeID: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    const data = {
      name: userInput.good,
      type: userInput.typeID,
    };
    console.log(data);
    if (data.name && data.type) {
      if (props.btnName === "Add New") {
        createGoods(data).then((res) => {
          alert("Insert success");
          window.location.reload(false);
        });
      } else if (props.btnName === "Edit") {
        updateGoods(props.goodID, data).then((res) => {
          alert("Update success");
          window.location.reload(false);
        });
      }
    } else {
      alert("Input must not be empty");
    }
  };

  const resetState = () => {
    setUserInput(initialState);
    setIsEditing(false);
  };

  const { button, options, open, onClose, btnName } = props;

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
                value={userInput.good}
                onChange={handleNameChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>Goods Type</Label>
              <Dropdown
                disabled={!isEditing}
                fluid
                selection
                options={options}
                defaultValue={userInput.typeID}
                onChange={handleTypeChange}
              />
            </Form.Field>
            <div>
              <Button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                color="green"
              >
                {isEditing ? "Save" : btnName}
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  resetState();
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
};

export default DetailGoods;
