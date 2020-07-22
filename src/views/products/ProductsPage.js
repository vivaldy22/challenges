import React, { Component } from "react";
import { Button, Header, Table, Pagination, Icon } from "semantic-ui-react";
import { getProducts } from "../../api/Products";
import TableContent from "./TableContent";
import LoadingPage from "../../components/LoadingPage";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      products: [],
    };
  }

  getProductsData = () => {
    getProducts()
      .then((products) => {
        this.setState({
          ...this.state,
          isLoaded: true,
          products,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount = () => {
    this.getProductsData();
  };

  handleSaveClick = (id, data) => {
    this.state.products.forEach((each, i) => {
      if (each.id === id) {
        this.state.products.splice(i, 1, data);
      }
    });

    this.setState({
      ...this.state,
      products: this.state.products,
    });
  };

  render() {
    const { isLoaded, products } = this.state;
    const showTableContent = products.map((product, i) => {
      return (
        <TableContent
          key={i}
          index={i}
          item={product}
          onSaveClick={this.handleSaveClick}
        />
      );
    });

    const showProducts = (
      <div className="table-container">
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4" textAlign={"center"}>
                Products Table
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell className="table-no">No.</Table.HeaderCell>
              <Table.HeaderCell>Product's Name</Table.HeaderCell>
              <Table.HeaderCell>Product's Price</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{showTableContent}</Table.Body>
        </Table>
      </div>
    );

    if (!isLoaded) {
      return <LoadingPage />;
    } else {
      return showProducts;
    }
  }
}

export default ProductsPage;
