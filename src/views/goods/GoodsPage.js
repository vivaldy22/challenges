import React, { Component } from "react";
import { Button, Header, Table } from "semantic-ui-react";
import { getGoods } from "../../api/Goods";
import TableContent from "./TableContent";

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

  handleSaveClick = (id, data) => {
    this.state.goods.forEach((each, i) => {
      if (each.id === id) {
        this.state.goods.splice(i, 1, data);
      }
    });

    this.setState({
      goods: this.state.goods,
    });
  };

  render() {
    const { isLoaded, goods } = this.state;
    const showTableContent = goods.map((good, i) => {
      return (
        <TableContent
          key={i}
          index={i}
          item={good}
          onSaveClick={this.handleSaveClick}
        />
      );
    });

    const showGoods = (
      <div className="table-container">
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4" textAlign={"center"}>
                Goods Table
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell className="table-no">No.</Table.HeaderCell>
              <Table.HeaderCell>Good's Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{showTableContent}</Table.Body>
        </Table>
      </div>
    );

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return showGoods;
    }
  }
}

export default GoodsPage;
