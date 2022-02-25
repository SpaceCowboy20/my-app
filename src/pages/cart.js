import React, { Component } from "react";
import { connect } from "react-redux";
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
    console.log(cart);
    return (
      <div>
        <div className="board">
          <div className="pad profil1">
            <div className="backstore ">tableau de bord</div>
            <div className="backstore">informations utilisateur</div>
            <div className="backstore">commandes</div>
            <div className="backstore selected">panier</div>
            <div className="backstore">wishliste</div>
            <div className="backstore">devenir vendeur</div>
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
