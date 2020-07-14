import React, { Component } from "react";
import "./App.css";
import MyCard from "./components/card/MyCard";
import Header from "./components/header/Header";
import InputText from "./components/inputText/InputText";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleTxtInputChange = (event) => {
    const val = event.target.value;
    this.setState({
      number: val,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MyCard number={this.state.number} />
        <InputText onTextChange={this.handleTxtInputChange} />
      </div>
    );
  }
}

export default App;
