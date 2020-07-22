import React, { Component } from "react";
import { Button, Input, Table, Dropdown } from "semantic-ui-react";
import DetailProducts from "./DetailProducts";

class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      good: this.props.item.name,
      typeLabel: "",
      typeID: "",
      isEditing: false,
      isLoaded: false,
      error: "",
    };
  }

  componentDidMount() {}

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
    const { isEditing, good, typeID, types } = this.state;
    const typeOptions = types.map((type, index) => ({
      key: type.id,
      text: type.name,
      value: type.id,
    }));

    const defValue = (findType) => {
      for (let i in types) {
        if (types[i].name === findType) {
          let data = {
            id: types[i].id,
            name: types[i].name,
          };
          return data;
        }
      }
    };

    return (
      <Table.Row key={key}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>
          {isEditing ? (
            <Input
              name="good"
              type="text"
              value={good}
              onChange={this.handleChange}
              size={"small"}
            />
          ) : (
            item.name
          )}
        </Table.Cell>
        <Table.Cell style={{ width: "250px" }}>
          {isEditing ? (
            <Dropdown
              name="type"
              selection
              options={typeOptions}
              defaultSelectedLabel={defValue(this.state.typeLabel).name}
              defaultValue={defValue(this.state.typeLabel).id}
              onChange={this.handleTypeChange}
            />
          ) : (
            item.type
          )}
        </Table.Cell>
        <Table.Cell style={{ width: "285px", textAlign: "right" }}>
          <DetailProducts
            name={item.name}
            type={item.type}
            button={<Button>Details</Button>}
          />
          <Button
            onClick={
              isEditing
                ? () => {
                    const data = {
                      id: item.id,
                      name: good,
                      type: typeID,
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
