import React from "react";
import axios from "axios";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "./style.css";
import { GoogleLogout } from "react-google-login";
import { MdLibraryAdd } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

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
    <div className="menu-container">
      <button onClick={() => addTodo()} className="add_btn">
        {" "}
        add Todo
      </button>

      <Menu className="menu" menuButton={<MenuButton>Hello {name}</MenuButton>}>
        <MenuItem onClick={() => addTodo()}>
          {" "}
          <MdLibraryAdd /> add Todo
        </MenuItem>
        <MenuItem>
          <FiLogOut />
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            render={(renderProps) => (
              <button
                className="logout_btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Log Out
              </button>
            )}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
