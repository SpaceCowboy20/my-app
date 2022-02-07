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
        <img
          className="card-img"
          src={productData.image}
          alt={productData.title}
        />
        <div className="card-text-box">
          <BiIcons.BiHeart className="card-heart" />
          
            <span className="card-title card-text">{productData.title}</span>
          
          
            <span className="card-price card-text">{productData.price}</span>
         
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
