import React, { Component } from "react";
import "./style.css";

class MyCard extends Component {
  render() {
    let { number } = this.props;
    return (
      <div className="myCard">
        <div>
          <h1>Angka didapat:</h1>
          <p>{number}</p>
        </div>
      </div>
    );
  }
}

export default MyCard;
