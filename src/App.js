import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import MyHeader from "./components/MyHeader";
import HomePage from "./views/home/HomePage";
import GoodsPage from "./views/goods/GoodsPage";
import WarehousePage from "./views/warehouse/WarehousePage";
import Nav from "./containers/Nav/Nav";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      activeMenu: "home",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleMenuClick = (e, { name }) => this.setState({ activeMenu: name });*/

  render() {
    /*const showMenu = () => {
      switch (this.state.activeMenu) {
        case "home":
          return <HomePage onArrowBtnClick={this.handleMenuClick} />;
        case "goods":
          return <GoodsPage />;
        case "warehouse":
          return <WarehousePage />;
        default:
          return <HomePage />;
      }
    };*/

    return (
      /*<div className="background-image">
        <MyHeader
          activeMenu={this.state.activeMenu}
          onMenuClick={this.handleMenuClick}
        />
        {showMenu()}
      </div>*/
      <div>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
