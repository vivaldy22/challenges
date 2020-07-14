import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      text: "",
    };
  }

  componentDidMount() {
    this.setState({
      color: "red",
      text: "The updated color is red",
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(() => {
      const isYellow = this.state.color === "yellow";
      this.setState({
        color: isYellow ? "red" : "yellow",
        text: isYellow
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
