import React, { useState, useEffect } from "react";
import { Button, Table } from "semantic-ui-react";
import TableContentGoods from "./TableContentGoods";
import LoadingPage from "../../components/LoadingPage";
import DetailGoods from "./DetailGoods";
import { getGoods } from "../../api/Goods";
import { getTypes } from "../../api/Type";
import { connect } from "react-redux";

const GoodsPage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const getAllData = () => {
    getGoods()
      .then((goods) => {
        props.setGoodData(goods);

        getTypes()
          .then((types) => {
            props.setTypesData(types);
            setIsLoaded(true);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAddNewBtnClick = () => {
    setOpen(true);
  };

  const handleCloseDetailClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAllData();
  }, [isLoaded]);

  const { goods, types } = props;

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
        <TableContentGoods
          key={i}
          index={i}
          item={good}
          options={typeOptions}
        />
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
              <Button color="green" onClick={handleAddNewBtnClick}>
                Add New Goods
              </Button>
            }
            onClose={handleCloseDetailClick}
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
};

const mapStateToProps = (state) => {
  return {
    goods: state.goodsReduc.goods,
    types: state.typesReduc.types,
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
