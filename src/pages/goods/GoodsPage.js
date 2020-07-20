import React, { Component } from "react";
import { Table, Segment } from "semantic-ui-react";
import { getGoods } from "../../api/Goods";

class GoodsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      goods: [],
    };
  }

  getGoodsData = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          isLoaded: true,
          goods,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount = () => {
    this.getGoodsData();
  };

  render() {
    const { isLoaded, goods } = this.state;
    const showGoods = (
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No.</Table.HeaderCell>
            <Table.HeaderCell>Good's Name</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {goods.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return showGoods;
    }
  }
}

export default GoodsPage;
