import React, { Component } from "react";

class Cartobject extends Component {
  render() {
    const productData = this.props.productData;
    return (
      <div className="cartobject">
        <img src={productData.image} alt="" className="img" />
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
      </div>
    );
  }
}
export default Cartobject;
