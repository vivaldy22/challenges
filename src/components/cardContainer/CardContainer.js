import React, { Component } from "react";
import MyCard from "../card/MyCard";

class CardContainer extends Component {
  render() {
    const { cards, onRmvBtnClick } = this.props;
    let exampleData, showCards;

    if (cards.length === 0) {
      exampleData = {
        id: 0,
        name: "Example Card",
        address: "Example",
        age: 0,
        email: "example@domain.com",
      };
    } else {
      showCards = cards.map((data, i) => (
        <MyCard key={i} data={data} onRmvBtnClick={onRmvBtnClick} />
      ));
    }

    return (
      <div className="card-container">
        {cards.length === 0 ? (
          <MyCard key={0} data={exampleData} onRmvBtnClick={onRmvBtnClick} />
        ) : (
          showCards
        )}
      </div>
    );
  }
}

export default CardContainer;
