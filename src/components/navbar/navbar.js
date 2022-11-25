import React, { Component } from "react";
import logo from "./logo.png";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteHeart, getHearts } from "../../state/shopping/shopping-actions";
import { updateSearch } from "../../state/search/search-actions";
import { products } from "../datasamples/productsSample";
import { withRouter } from "../../withRouter/withRouter";
import { compose } from "redux";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  //push full array to db
  /////////////////////////////////
  /* pushToDb = async () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products,
      }),
    };
    let reponse = await fetch("http://localhost:780/addproduct", options);
    console.log(reponse);
  }; */

  getHeart = async () => {
    let token = JSON.parse(window.localStorage.getItem("TOKEN"));

    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN: token,
      },
    };
    let response = await fetch("http://localhost:780/getheart", options);
    let data = await response.json();

    this.props.getHearts(data.hearts);
  };

  updateHeart = async () => {
    let heart = this.props.heart;
    let token = JSON.parse(window.localStorage.getItem("TOKEN"));
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: token,
      },
      body: JSON.stringify({ products: heart }),
    };
    await fetch("http://localhost:780/updateheart", options);
  };

  componentDidMount() {
    let count = 0;
    let cart = this.props.cart;
    let isLogged = this.props.isLogged;
    /* cart.forEach((element) => {
      count = count + element.qty;
    }); */
    count = cart.length;
    this.setState({ counter: count });
    if (isLogged === true) {
      this.getHeart();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let count = 0;
    let isLogged = this.props.isLogged;
    let cart = this.props.cart;
    /* cart.forEach((element) => {
      count = count + element.qty;
    }); */
    count = cart.length;
    if (prevState === this.state) {
      this.setState({ counter: count });
      window.localStorage.setItem("cart", JSON.stringify(cart));
      if (isLogged === true) {
        this.updateHeart();
      } else {
        this.props.deleteHeart();
      }
    }
  }

  render() {
    let isLogged = this.props.isLogged;
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
            onKeyDown={(e) => {
              e.key === "Enter" && this.props.navigate("/search");
            }}
            onChange={(event) => this.props.searchupdate(event.target.value)}
          />
          <Link to="/search">
            <FaIcons.FaSearch className="search-btn" onClick={() => {}} />
          </Link>
        </div>
        {/* <button onClick={this.pushToDb}>push</button> */}

        <div className="navbar-elements">
          {isLogged ? (
            <Link to="/profile">
              <button className="login-btn">Profile</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="login-btn">Login/Signup</button>
            </Link>
          )}
          {/* <button
            onClick={() => {
              this.pushToDb();
            }}
          >
            push to DB
          </button> */}
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
    isLogged: state.isLogged.isLogged,
    heart: state.shop.heart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHearts: (hearts) => dispatch(getHearts(hearts)),
    deleteHeart: () => dispatch(deleteHeart()),
    searchupdate: (word) => dispatch(updateSearch(word)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar);
