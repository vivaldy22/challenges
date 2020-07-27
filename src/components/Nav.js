import React, { useEffect, useState } from "react";
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

const Nav = (props) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("auth") !== null) {
      setAuth(true);
      props.history.push({
        pathname: props.location.pathname,
      });
    } else {
      sessionStorage.removeItem("auth");
    }
  });

  const onLogin = () => {
    setAuth(true);
    sessionStorage.setItem("auth", "loggedIn");
    props.history.push({
      pathname: "/home",
    });
  };

  const onLogout = () => {
    setAuth(false);
    props.history.push({
      pathname: "/",
    });
    sessionStorage.removeItem("auth");
  };

  const routeList = routes.map((route) => {
    return (
      <Route
        key={route.id}
        path={route.path}
        render={(props) => {
          return auth ? <route.component {...props} /> : <Redirect to="/" />;
        }}
      />
    );
  });

  return (
    <div className="background-image-home">
      <MyHeader onLogout={onLogout} auth={auth} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            if (sessionStorage.getItem("auth") === "loggedIn") {
              onLogin();
            } else {
              return <LoginPage onLogin={onLogin} />;
              return <LoginPage onLogin={onLogin} />;
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
};

export default withRouter(Nav);
