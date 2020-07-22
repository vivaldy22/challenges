import React, { Component } from "react";
import "./App.css";
import "./assets/css/style.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import SamplePropTypes from "./views/SamplePropTypes";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        {/*<SamplePropTypes name={<div>asd</div>} />*/}
      </div>
    );
  }
}

export default App;
