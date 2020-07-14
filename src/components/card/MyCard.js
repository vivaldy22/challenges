import React, { Component } from "react";
import "./style.css";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  tambah = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  kurang = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    const num = this.state.number;
    const isNumZero = num === 0;
    const isNumLowerThanZero = num < 0;

    return (
      <div className="myCard">
        {isNumZero ? (
          <p className="black">{num}</p>
        ) : isNumLowerThanZero ? (
          <p className="red">{num}</p>
        ) : (
          <p className="green">{num}</p>
        )}
        <div>
          <button
            onClick={() => {
              this.kurang();
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              this.tambah();
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default MyCard;
