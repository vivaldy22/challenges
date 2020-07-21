import React from "react";
import { Form, Input, Modal, Label } from "semantic-ui-react";

const DetailGoods = (props) => {
  const { name, type, button } = props;

  return (
    <Modal trigger={button} closeIcon>
      <Modal.Header>Goods Data</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label>Goods Name</Label>
              <Input value={name} />
            </Form.Field>
            <Form.Field>
              <Label>Goods Type</Label>
              <Input value={type} />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default DetailGoods;
