import React, { Component } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import MyHeader from "./MyHeader";
import HomePage from "../views/home/HomePage";
import ProductsPage from "../views/products/ProductsPage";
import NotFound from "./NotFound";
import LoginPage from "../views/login/LoginPage";

const routes = [
  { id: 1, path: "/home", component: HomePage },
  { id: 2, path: "/products", component: ProductsPage },
  // { id: 3, path: "/users", component: UsersPage },
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      token: "",
    };
  }

  onLogin = () => {
    this.setState({
      auth: true,
      token: sessionStorage.getItem("token"),
    });
    this.props.history.push({
      pathname: "/home",
    });
  };

  onLogout = () => {
    this.setState({
      auth: false,
      token: "",
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
      <div className="background-image-home">
        <MyHeader
          onLogout={this.onLogout}
          auth={this.state.auth}
          token={this.state.token}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return <LoginPage onLogin={this.onLogin} />;
            }}
          />
          {routeList}
          <Route
            path="*"
            render={(props) => {
              return <NotFound />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Nav);
