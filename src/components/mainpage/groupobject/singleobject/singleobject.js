import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  addToHeart,
} from "../../../../state/shopping/shopping-actions";
import * as BiIcons from "react-icons/bi";
import "./singleobject.css";
import { Link } from "react-router-dom";

class Singleobject extends Component {
  render() {
    const productData = this.props.productData;
    const addToCart = this.props.addToCart;
    const addToHeart = this.props.addToHeart;
    return (
      <div>
        <div className="card">
          <img
            className="card-img"
            src={productData.image}
            alt={productData.title}
          />
          <div className="card-text-box">
            <BiIcons.BiHeart
              className="card-heart"
              onClick={() => addToHeart(productData.id)}
            />
            <Link to={`/product/${productData.id}`}>
              <div className="card-title-box">
                <p className="card-title card-text">{productData.title} </p>
              </div>
            </Link>
            <div className="card-price-box">
              <p className="card-price card-text">{productData.price}</p>
            </div>
            <BiIcons.BiCartAlt
              onClick={() => addToCart(productData.id)}
              className="card-cart"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToHeart: (id) => dispatch(addToHeart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Singleobject);
