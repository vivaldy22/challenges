import React from "react";
import { Menu, Image, Icon } from "semantic-ui-react";
import logo from "../img/icon.png";
import { NavLink } from "react-router-dom";

const MyHeader = (props) => {
  const { onLogin, onLogout, auth } = props;
  return (
    <div>
      <Menu pointing color="brown">
        <Menu.Item>
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home" name="home">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/goods" name="goods">
          <Icon name="sticky note outline" />
          Goods
        </Menu.Item>
        <Menu.Item as={NavLink} to="/warehouses" name="warehouses">
          <Icon name="warehouse" />
          Warehouse
        </Menu.Item>
        <Menu.Item as={NavLink} to="/testing" name="testing">
          <Icon name="telegram" />
          Testing Menu
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
    </div>
  );
};

export default MyHeader;
