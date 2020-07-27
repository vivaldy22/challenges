import React, { useState, useEffect } from "react";
import { Button, Table } from "semantic-ui-react";
import DetailGoods from "./DetailGoods";
import { deleteGoods } from "../../api/Goods";
import mySwal from "../../components/MySwal";

const TableContentGoods = (props) => {
  const [open, setOpen] = useState(false);

  const handleShowInfoClick = () => {
    setOpen(true);
  };

  const handleCloseDetailClick = () => {
    setOpen(false);
  };

  const handleDelBtnClick = (id) => {
    mySwal({
      title: "Are you sure?",
      text: "The selected data will be gone :(",
      icon: "warning",
      confirmText: "Yes, I want to delete it",
      showCancel: true,
      doNext: () => {
        deleteGoods(id)
          .then((res) => {
            console.log(res);
            alert("Delete success");
          })
          .catch((e) => {
            console.log(e);
            alert("Error when deleting, see log");
          });
        window.location.reload(false);
      },
    });
  };

  const { index, item, options } = props;

  return (
    <Table.Row>
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
              onClick={handleShowInfoClick}
            />
          }
          onClose={handleCloseDetailClick}
          btnName="Edit"
        />
        <Button
          circular
          icon="trash"
          size="small"
          color="red"
          onClick={() => handleDelBtnClick(item.id)}
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableContentGoods;
