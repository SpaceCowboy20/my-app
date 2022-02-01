import React, { Component } from "react";
import logo from "./logo.png";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-box">
        <Link to="/">
          <div className="logo-box">
            <img className="image" src={logo} alt="" />
          </div>
        </Link>

        <div className="search-box">
          <input
            className="search-text"
            type="text"
            name=""
            placeholder="search"
          />
          <FaIcons.FaSearch className="search-btn" />
        </div>

        <div className="elements">
          <button className="login-btn">Login/Signup</button>
          <BiIcons.BiHeart className="heart" />
          <BiIcons.BiCartAlt className="cart" />
          <HiIcons.HiOutlineViewList className="menu" />
        </div>
      </div>
    );
  }
}

export default Navbar;
