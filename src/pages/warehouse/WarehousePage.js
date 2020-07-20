import React, { Component } from "react";
import { Table, Segment } from "semantic-ui-react";
import { getWarehouses } from "../../api/Warehouse";

class WarehousePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      warehouses: [],
    };
  }

  getWarehousesData = () => {
    getWarehouses()
      .then((warehouses) => {
        this.setState({
          isLoaded: true,
          warehouses,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount = () => {
    this.getWarehousesData();
  };

  render() {
    const { isLoaded, warehouses } = this.state;
    const showWarehouses = (
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No.</Table.HeaderCell>
            <Table.HeaderCell>Warehouse Name</Table.HeaderCell>
            <Table.HeaderCell>Warehouse Type</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Capacity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {warehouses.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell>{item.location}</Table.Cell>
              <Table.Cell>{item.capacity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return showWarehouses;
    }
  }
}

export default WarehousePage;
