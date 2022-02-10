import React, { Component, useState, useEffect } from "react";
import logo from "./logo.png";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    let count = 0;
    let cart = this.props.cart;
    cart.forEach((element) => {
      count = count + element.qty;
    });
    if (prevState === this.state) {
      this.setState({ counter: count });
    }
  }
  render() {
    return (
      <div className="navbox">
        <Link to="/">
          <div className="logo-box">
            <img className="logo" src={logo} alt="" />
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

        <div className="navbar-elements">
          <Link to="/profile">
            <button className="login-btn">Login/Signup</button>
          </Link>
          <Link to="/heart">
            <div className="heart-box">
              <BiIcons.BiHeart className="heart" />
            </div>
          </Link>
          <Link to="cart">
            <div className="cart-box">
              <BiIcons.BiCartAlt className="cart" />
              <span className="badge">{this.state.counter}</span>
            </div>
          </Link>
          <HiIcons.HiOutlineViewList className="menu" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
