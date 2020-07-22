import React from "react";
import { Form, Input, Modal, Label } from "semantic-ui-react";

const DetailUsers = (props) => {
  const { username, age, address, button } = props;

  return (
    <Modal trigger={button} closeIcon>
      <Modal.Header>Goods Data</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label>Username</Label>
              <Input value={username} />
            </Form.Field>
            <Form.Field>
              <Label>Age</Label>
              <Input value={age} />
            </Form.Field>
            <Form.Field>
              <Label>Address</Label>
              <Input value={address} />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default DetailUsers;
