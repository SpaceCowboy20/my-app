import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../../state/shopping/shopping-actions";
import * as BiIcons from "react-icons/bi";

class Singleobject extends Component {
  render() {
    const productData = this.props.productData;
    const addToCart = this.props.addToCart;
    return (
      <div>
        <div className="card">
          <div className="img-div">
            <img
              className="img-box"
              src={productData.image}
              alt={productData.title}
            />
          </div>
          <div className="text-div">
            <BiIcons.BiHeart className="heart-card" />
            <div className="img-cat-text">{productData.title}</div>
            <BiIcons.BiCartAlt onClick={() => addToCart(productData.id)} />
          </div>
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
