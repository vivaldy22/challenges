import React, { Component } from "react";
import "./style.css";
import Button from "../button/Button";

class MyCard extends Component {
  render() {
    let { name, address, age, email, onRmvBtnClick } = this.props.data;
    return (
      <div className="myCard">
        <div>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{age}</p>
          <p>{email}</p>
        </div>
        <Button onClick={onRmvBtnClick} text="Remove" />
      </div>
    );
  }
}

export default MyCard;
