import React, { Component } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import HomePage from "../../views/home/HomePage";
import GoodsPage from "../../views/goods/GoodsPage";
import WarehousePage from "../../views/warehouse/WarehousePage";

const routes = [
  { id: 1, path: "/home", component: HomePage },
  { id: 2, path: "/goods", component: GoodsPage },
  { id: 3, path: "/warehouses", component: WarehousePage },
  { id: 4, path: "/testing", component: WarehousePage },
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "",
      auth: false,
    };
  }

  onLogin = () => {
    this.setState({
      auth: true,
    });
    this.props.history.push({
      pathname: "/home",
    });
  };

  onLogout = () => {
    this.setState({
      auth: false,
    });
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    const routeList = routes.map((route) => {
      return (
        <Route
          key={route.id}
          path={route.path}
          render={(props) => {
            return this.state.auth ? (
              <route.component {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      );
    });

    return (
      <div className="background-image">
        <MyHeader
          onLogin={this.onLogin}
          onLogout={this.onLogout}
          auth={this.state.auth}
        />
        <Switch>
          <Route path="/" exact />
          {routeList}
          <Route
            render={(props) => {
              return <h1>404</h1>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Nav);
