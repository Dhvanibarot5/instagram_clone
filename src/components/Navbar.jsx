import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-around shadow-md shadow-slate-300 py-3">
      <img src={logo} alt="" />
      <ul className="nav-menu flex text-lg">
        <Link to="/signup">
          <li>SignUp</li>
        </Link>
        <Link to="/signin">
          <li>SignIn</li>
        </Link>
        <Link to="profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
