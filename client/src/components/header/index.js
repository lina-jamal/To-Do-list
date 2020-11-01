import React from "react";
import axios from "axios";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

function Header({ name, setAuth, addTodo }) {
  const logout = async () => {
    try {
      axios.get(`/api/v1/logout`);
      setAuth(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Menu menuButton={<MenuButton>Hello {name}</MenuButton>}>
      <MenuItem onClick={() => addTodo()}>add Todo</MenuItem>

      <MenuItem onClick={logout}>Log Out</MenuItem>
    </Menu>
  );
}

export default Header;
