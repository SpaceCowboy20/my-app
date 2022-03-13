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
        <div className="cartobject">
          <div className="cart-img-box">
            <img src={productData.image} alt="" className="cart-img" />
          </div>
          <div className="cart-text-box">
            <Link to={`/product/${productData._id}`}>
              <p>{productData.title}</p>
            </Link>
            <p>{productData.description}</p>
            <p>{productData.price}</p>
            <input
              type="number"
              min="1"
              className="quantity"
              value={this.state.qty}
              onChange={(event) => {
                this.setState({ qty: event.target.value });
                adjust(productData._id, event.target.value);
              }}
            />
            <AiIcons.AiFillDelete
              className="delete"
              onClick={() => {
                removeFromCart(productData._id);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjust: (_id, value) => dispatch(adjust(_id, value)),
    removeFromCart: (_id) => dispatch(removeFromCart(_id)),
  };
};

export default connect(null, mapDispatchToProps)(Cartobject);
