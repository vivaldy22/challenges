import React from "react";
import { Menu, Image, Icon } from "semantic-ui-react";
import logo from "../img/icon.png";

const MyHeader = (props) => {
  const { activeMenu, onMenuClick } = props;
  return (
    <div>
      <Menu pointing color="brown">
        <Menu.Item>
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeMenu === "home"}
          onClick={onMenuClick}
        >
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item
          name="goods"
          active={activeMenu === "goods"}
          onClick={onMenuClick}
        >
          <Icon name="sticky note outline" />
          Goods
        </Menu.Item>
        <Menu.Item
          name="warehouse"
          active={activeMenu === "warehouse"}
          onClick={onMenuClick}
        >
          <Icon name="warehouse" />
          Warehouse
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            // active={activeMenu === "login"}
            onClick={onMenuClick}
          >
            <Icon name="sign-in" />
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MyHeader;
