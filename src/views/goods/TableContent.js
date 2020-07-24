import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import DetailGoods from "./DetailGoods";
import { deleteGoods } from "../../api/Goods";
import mySwal from "../../components/MySwal";

class TableContent extends Component {
  state = {
    isLoaded: false,
    error: "",
    open: false,
  };

  handleShowInfoClick = () => {
    this.setState({
      open: true,
    });
  };

  handleCloseDetailClick = () => {
    this.setState({
      open: false,
    });
  };

  handleDelBtnClick = (id) => {
    mySwal({
      title: "Are you sure?",
      text: "The selected data will be gone :(",
      icon: "warning",
      confirmText: "Yes, I want to delete it",
      showCancel: true,
      doNext: () => {
        // console.log(id);
        // alert(id);
        deleteGoods(id)
          .then((res) => {
            console.log(res);
            alert("Delete success");
          })
          .catch((e) => {
            console.log(e);
            alert("Error when deleting, see log");
          });
      },
    });
  };

  render() {
    const { onSaveClick, key, index, item, options } = this.props;
    const { isEditing, good, typeID, open } = this.state;

    return (
      <Table.Row key={key}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.type}</Table.Cell>
        <Table.Cell style={{ width: "285px", textAlign: "center" }}>
          <DetailGoods
            goodID={item.id}
            name={item.name}
            type={item.type}
            typeID={item.typeID}
            options={options}
            open={open}
            button={
              <Button
                circular
                icon="info"
                size="small"
                color="blue"
                onClick={this.handleShowInfoClick}
              />
            }
            onClose={this.handleCloseDetailClick}
            btnName="Edit"
          />
          <Button
            circular
            icon="trash"
            size="small"
            color="red"
            onClick={() => this.handleDelBtnClick(item.id)}
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableContent;
