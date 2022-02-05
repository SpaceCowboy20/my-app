import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../../state/shopping/shopping-actions";
import * as BiIcons from "react-icons/bi";

class Singleobject extends Component {
  render() {
    const productData = this.props.productData;
    const addToCart = this.props.addToCart;
    return (
      <div className="card">
        <div className="card-img-box">
          <img
            className="card-img"
            src={productData.image}
            alt={productData.title}
          />
        </div>
        <div className="card-text-box">
          <BiIcons.BiHeart className="card-heart" />
          <div className="card-text">{productData.title}</div>
          <BiIcons.BiCartAlt
            onClick={() => addToCart(productData.id)}
            className="card-cart"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Singleobject);
