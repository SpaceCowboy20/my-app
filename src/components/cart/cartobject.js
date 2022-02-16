import React, { Component } from "react";
import "./cartobject.css";
import * as AiIcons from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { adjust, removeFromCart } from "../../state/shopping/shopping-actions";

class Cartobject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: this.props.productData.qty,
    };
  }
  render() {
    const productData = this.props.productData;
    const removeFromCart = this.props.removeFromCart;
    const adjust = this.props.adjust;
    return (
      <div>
        <Link to={`/product/${productData.id}`}>
          <div className="cartobject">
            <div className="cart-img-box">
              <img src={productData.image} alt="" className="cart-img" />
            </div>
            <div className="cart-text-box">
              <p>{productData.title}</p>
              <p>{productData.description}</p>
              <p>{productData.price}</p>
              <input
                type="number"
                min="1"
                className="quantity"
                value={this.state.qty}
                onChange={(e) => {
                  this.setState({ qty: e.target.value });
                  adjust(productData.id, e.target.value);
                }}
              />
              <AiIcons.AiFillDelete
                className="delete"
                onClick={() => {
                  removeFromCart(productData.id);
                }}
              />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjust: (id, value) => dispatch(adjust(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Cartobject);
