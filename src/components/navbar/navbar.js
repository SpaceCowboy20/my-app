import React, { Component } from "react";
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
  componentDidMount() {
    let count = 0;
    let cart = this.props.cart;
    cart.forEach((element) => {
      count = count + element.qty;
    });
    this.setState({ counter: count });
  }
  componentDidUpdate(prevProps, prevState) {
    let count = 0;
    let cart = this.props.cart;
    cart.forEach((element) => {
      count = count + element.qty;
    });
    if (prevState === this.state) {
      this.setState({ counter: count });
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  render() {
    let isLogged = this.props.isLogged.isLogged;
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
          <Link to="/search">
            <FaIcons.FaSearch className="search-btn" />
          </Link>
        </div>

        <div className="navbar-elements">
          {isLogged ? (
            <Link to="/profile">
              <button className="login-btn">profile</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="login-btn">Login/Signup</button>
            </Link>
          )}
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
    isLogged: state.isLogged,
  };
};

export default connect(mapStateToProps)(Navbar);
