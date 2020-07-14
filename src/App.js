import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyCard from "./components/card/MyCard";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ height: "10px" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyCard />
    </div>
  );
}

export default App;
