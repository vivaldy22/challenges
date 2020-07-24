import React from "react";
import { Menu, Image, Icon } from "semantic-ui-react";
import logo from "../assets/img/icon.png";
import { NavLink } from "react-router-dom";

const MyHeader = (props) => {
  const { onLogin, onLogout, auth } = props;
  return (
    <div>
      {auth ? (
        <Menu pointing color="brown">
          <Menu.Item>
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/home" name="home">
            <Icon name="home" />
            Home
          </Menu.Item>

          {/*<Menu.Item as={NavLink} to="/products" name="products">*/}
          {/*  <Icon name="sticky note outline" />*/}
          {/*  Products*/}
          {/*</Menu.Item>*/}
          <Menu.Item as={NavLink} to="/goods" name="goods">
            <Icon name="sticky note" />
            Goods
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name={auth ? "logout" : "login"}
              onClick={auth ? onLogout : onLogin}
            >
              <Icon name={auth ? "log out" : "sign-in"} />
              {auth ? "Logout" : "Login"}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyHeader;
