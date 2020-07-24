import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import TableContent from "./TableContent";
import LoadingPage from "../../components/LoadingPage";
import DetailGoods from "./DetailGoods";
import { getGoods } from "../../api/Goods";
import { getTypes } from "../../api/Type";
import { connect } from "react-redux";

class GoodsPage extends Component {
  state = {
    isLoaded: false,
    open: false,
  };

  getAllData = () => {
    getGoods()
      .then((goods) => {
        this.props.setGoodData(goods);

        getTypes()
          .then((types) => {
            this.props.setTypesData(types);
            this.setState({
              ...this.state,
              isLoaded: true,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount = () => {
    this.getAllData();
  };

  handleAddNewBtnClick = () => {
    this.setState({
      open: true,
    });
  };

  handleCloseDetailClick = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { isLoaded, open } = this.state;
    const { goods, types } = this.props;

    if (!isLoaded) {
      return <LoadingPage />;
    } else {
      const typeOptions = types.map((type, index) => ({
        key: type.id,
        text: type.name,
        value: type.id,
      }));

      const showTableContent = goods.map((good, i) => {
        return (
          <TableContent key={i} index={i} item={good} options={typeOptions} />
        );
      });

      return (
        <div className="table-container">
          <div style={{ float: "right", marginBottom: "1em" }}>
            <DetailGoods
              name=""
              type={typeOptions[0].text}
              typeID={typeOptions[0].value}
              options={typeOptions}
              open={open}
              button={
                <Button color="green" onClick={this.handleAddNewBtnClick}>
                  Add New Goods
                </Button>
              }
              onClose={this.handleCloseDetailClick}
              btnName="Add New"
            />
          </div>
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
                <Table.HeaderCell>Good's Type</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{showTableContent}</Table.Body>
          </Table>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    types: state.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGoodData: (goods) => {
      dispatch({ type: "SET_GOODS", goods });
    },
    setTypesData: (types) => {
      dispatch({ type: "SET_TYPES", types });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsPage);