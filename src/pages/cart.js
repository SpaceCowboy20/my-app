import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cartobject from "../components/cart/cartobject";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      totalItems: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    let price = 0;
    let itemcount = 0;
    let cart = this.props.cart;
    cart.forEach((item) => {
      itemcount += item.qty;
      price += item.qty * item.price;
    });
    if (prevState === this.state) {
      this.setState({ totalPrice: price, totalItems: itemcount });
    }
  }
  componentDidMount() {
    let price = 0;
    let itemcount = 0;
    let cart = this.props.cart;
    cart.forEach((item) => {
      itemcount += item.qty;
      price += item.qty * item.price;
    });
    this.setState({ totalPrice: price, totalItems: itemcount });
  }
  render() {
    const cart = this.props.cart;
    return (
      <div>
        <div className="board">
          <div className="pad profil1">
            <Link to="/dashboard">
              <div className="backstore ">tableau de bord</div>
            </Link>
            <Link to="/profile">
              <div className="backstore">informations utilisateur</div>
            </Link>
            <Link to="/heart">
              <div className="backstore">wishliste</div>
            </Link>
            <Link to="/cart">
              <div className="backstore selected">panier</div>
            </Link>
            <Link to="/orders">
              <div className="backstore">commandes</div>
            </Link>
            <Link to="/cart">
              <div className="backstore">devenir vendeur</div>
            </Link>
          </div>
          <div className="pad profil2">
            <div className="cart-items">
              {cart.map((prod, index) => (
                <Cartobject key={index} productData={prod} />
              ))}
            </div>
            <div className="cart-total">
              <h2>Total</h2>
              <p>total items {this.state.totalItems}</p>
              <p>total price {this.state.totalPrice}</p>
              <Link to="/checkout">
                <button>checkout</button>
              </Link>
            </div>
          </div>
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
export default connect(mapStateToProps)(Cart);
