import React, { Component } from "react";
import "./App.css";
import "./assets/css/style.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
