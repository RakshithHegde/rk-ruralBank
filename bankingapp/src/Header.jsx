//import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <Link to="/home">
          <div className="logo">
            <h1 style={{ color: "0C134F" }}>Banking App</h1>
          </div>
        </Link>
        <ul className="navigation">
          <Link to="/">
            <a href="/">
              <li>Home</li>
            </a>
          </Link>
          <Link to="/users">
            <a href="/users">
              <li>Users</li>
            </a>
          </Link>
          <Link to="/createuser">
            <a href="/createuser">
              <li>Create User</li>
            </a>
          </Link>
          <Link to="/transaction">
            <a href="/transaction">
              <li>Transfer</li>
            </a>
          </Link>
          <Link to="/history">
            <a href="/history">
              <li>Transaction History</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
