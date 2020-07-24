import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import MyHeader from "./MyHeader";
import HomePage from "../views/home/HomePage";
import GoodsPage from "../views/goods/GoodsPage";
import NotFound from "./NotFound";
import LoginPage from "../views/login/LoginPage";

const routes = [
  { id: 1, path: "/home", component: HomePage },
  { id: 2, path: "/goods", component: GoodsPage },
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("auth") !== null) {
      this.setState({
        auth: true,
      });
      this.props.history.push({
        pathname: this.props.location.pathname,
      });
    } else {
      sessionStorage.clear();
    }
  }

  onLogin = () => {
    this.setState({
      auth: true,
    });
    sessionStorage.setItem("auth", "loggedIn");
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
    sessionStorage.clear();
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
        <MyHeader onLogout={this.onLogout} auth={this.state.auth} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              if (sessionStorage.getItem("auth") === "loggedIn") {
                this.onLogin();
              } else {
                return <LoginPage onLogin={this.onLogin} />;
              }
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
