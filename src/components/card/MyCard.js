import React, { Component } from "react";
import "./style.css";

class MyCard extends Component {
  render() {
    const myCard = "myCard";
    const button1Style = "button1Style";
    const button2Style = "button2Style";

    return (
      <div className={myCard}>
        <div>
          <button className={button1Style}>-</button>
          <button className={button2Style}>+</button>
        </div>
      </div>
    );
  }
}

export default MyCard;
