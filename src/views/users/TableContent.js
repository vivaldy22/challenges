import React, { Component } from "react";
import { Button, Input, Table, Dropdown } from "semantic-ui-react";
import { getTypes } from "../../api/Type";
import DetailUsers from "./DetailUsers";

class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.item.username,
      age: this.props.item.age,
      address: this.props.item.address,
      isEditing: false,
      isLoaded: false,
      error: "",
    };
  }

  componentDidMount() {
    getTypes()
      .then((types) => {
        this.setState({
          isLoaded: true,
          types,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleTypeChange = (e, { value }) => {
    this.setState({
      ...this.state,
      value,
    });
  };

  handleEditClick = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  render() {
    const { onSaveClick, key, index, item } = this.props;
    const { isEditing, username, age, address } = this.state;

    return (
      <Table.Row key={key}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>
          {isEditing ? (
            <Input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              size={"small"}
            />
          ) : (
            item.username
          )}
        </Table.Cell>
        <Table.Cell>
          {isEditing ? (
            <Input
              name="age"
              type="text"
              value={age}
              onChange={this.handleChange}
              size={"small"}
              style={{ width: "70px" }}
            />
          ) : (
            item.age
          )}
        </Table.Cell>
        <Table.Cell>
          {isEditing ? (
            <Input
              name="address"
              type="text"
              value={address}
              onChange={this.handleChange}
              size={"small"}
            />
          ) : (
            item.address
          )}
        </Table.Cell>

        <Table.Cell style={{ width: "285px", textAlign: "right" }}>
          <DetailUsers
            username={item.username}
            age={item.age}
            address={item.address}
            button={<Button>Details</Button>}
          />
          <Button
            onClick={
              isEditing
                ? () => {
                    const data = {
                      username: username,
                      age: age,
                      address: address,
                    };
                    this.handleEditClick();
                    console.log(data);
                    // onSaveClick(item.id, data);
                  }
                : this.handleEditClick
            }
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
          <Button>Remove</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableContent;
