import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      text: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "yellow",
        text: "The updated color is yellow",
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(() => {
      this.setState({
        color: this.state.color === "yellow" ? "red" : "yellow",
        text:
          this.state.color === "yellow"
            ? "The updated color is red"
            : "The updated color is yellow",
      });
    }, 2000);
  }

  render() {
    const { color, text } = this.state;
    const changeColor =
      color === "red" ? (
        <h1 style={{ color: "red" }}>The Color is {color}</h1>
      ) : (
        <h1 style={{ color: "yellow" }}>The Color is {color}</h1>
      );
    return (
      <div>
        {changeColor}
        <div id="mydiv">{text}</div>
      </div>
    );
  }
}

export default App;
