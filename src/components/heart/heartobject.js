import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";
import { connect } from "react-redux";
import { removeFromHeart } from "../../state/shopping/shopping-actions";

class Heartobject extends Component {
  render() {
    const productData = this.props.productData;
    const removeFromHeart = this.props.removeFromHeart;
    return (
      <div className="cartobject">
        <div className="cart-img-box">
          <img src={productData.image} alt="" className="cart-img" />
        </div>
        <div className="cart-text-box">
          <p>{productData.title}</p>
          <p>{productData.description}</p>
          <p>{productData.price}</p>
          <AiIcons.AiFillDelete
            className="delete"
            onClick={() => {
              removeFromHeart(productData.id);
            }}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromHeart: (id) => dispatch(removeFromHeart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Heartobject);
