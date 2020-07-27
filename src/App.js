import React, { Component } from "react";
import "./App.css";
import "./assets/css/style.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
};

export default App;
