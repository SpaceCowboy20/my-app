import React, { Component } from "react";
import { connect } from "react-redux";
import Cartobject from "../components/cart/cartobject";

class Cart extends Component {
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
            {cart.map((prod, index) => (
              <Cartobject key={index} productData={prod} />
            ))}
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
