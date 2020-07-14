import React from "react";
import "./App.css";
import MyCard from "./components/card/MyCard";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MyCard />
    </div>
  );
}

export default App;
