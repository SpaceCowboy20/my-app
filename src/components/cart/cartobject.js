import React, { Component } from "react";
import "./cartobject.css";

class Cartobject extends Component {
  render() {
    const productData = this.props.productData;
    return (
      <div className="cartobject">
        <div className="cart-img-box">
          <img src={productData.image} alt="" className="cart-img" />
        </div>
        <div className="cart-text-box">
          <h2>{productData.title}</h2>
          <p>{productData.description}</p>
        </div>
      </div>
    );
  }
}
export default Cartobject;
