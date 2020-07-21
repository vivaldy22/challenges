import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import Nav from "./containers/Nav/Nav";
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
