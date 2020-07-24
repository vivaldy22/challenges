import React from "react";
import { Button, Dropdown, Form, Input, Label, Modal } from "semantic-ui-react";

const MyModal = (props) => {
  const {
    button,
    options,
    open,
    onClose,
    good,
    type,
    typeID,
    isEditing,
    onTypeChange,
    onSaveClick,
    onEditClick,
  } = this.props;
  return (
    <Modal open={open} trigger={button}>
      <Modal.Header>Goods Data</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label>Goods Name</Label>
              <Input disabled={!isEditing} value={good} />
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
                onChange={onTypeChange}
              />
            </Form.Field>
            <div>
              <Button onClick={isEditing ? onSaveClick : onEditClick}>
                {isEditing ? "Save" : "Edit"}
              </Button>
              <Button onClick={onClose} disabled={isEditing}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
