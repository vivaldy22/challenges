import React, { Component } from "react";
import MyCard from "../card/MyCard";

class CardContainer extends Component {
  render() {
    const { cards, onRmvBtnClick } = this.props;
    const showCards = cards.map((data, i) => (
      <MyCard key={i} data={data} onRmvBtnClick={onRmvBtnClick} />
    ));

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {showCards}
      </div>
    );
  }
}

export default CardContainer;
