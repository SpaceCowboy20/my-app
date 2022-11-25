import React, { Component } from "react";
import "./cartobject.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "antd";
import {
  DeleteOutlined,
  SelectOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import swal from "sweetalert";
import {
  removeFromCart,
  addToHeart,
} from "../../state/shopping/shopping-actions";

class Cartobject extends Component {
  render() {
    const isLogged = this.props.isLogged;
    const productData = this.props.productData;
    const removeFromCart = this.props.removeFromCart;
    const addToHeart = this.props.addToHeart;
    // const adjust = this.props.adjust;
    let description = productData.description;
    if (description.length > 220)
      description = description.substring(0, 220) + " ...";
    return (
      <>
        <Card
          hoverable
          style={{ width: "30 rem", height: "20 rem", marginBottom: ".5rem" }}
          // style={{ width: 300 }}
          actions={[
            <HeartOutlined
              id="red"
              key="Heart"
              onClick={
                isLogged
                  ? () => addToHeart(productData._id)
                  : () => swal("Login first", "or signup", "error")
              }
            />,
            <Link to={`/product/${productData._id}`}>
              <SelectOutlined key="Select" />
            </Link>,
            <DeleteOutlined
              key="DeleteOutlined"
              onClick={() => {
                removeFromCart(productData._id);
              }}
            />,
          ]}
        >
          <h2>{productData.name}</h2>
          <div className="innercartbox">
            <img
              src={require("../../" + productData.image)}
              alt={productData.name}
              className="cart-img"
            />
            <p className="texxt">{description}</p>
          </div>
          <h2
            style={{ textAlign: "right", marginRight: "2rem" }}
            id="pricecartbox"
          >
            {productData.price} DA
          </h2>
          {/* <InputNumber
            className="quantity"
            min={1}
            value={this.state.qty}
            onChange={(event) => {
              this.setState({ qty: event.target.value });
              adjust(productData._id, event.target.value);
            }}
          /> */}
          {/* <input
            type="number"
            min="1"
            className="quantity"
            value={this.state.qty}
            onChange={(event) => {
              this.setState({ qty: event.target.value });
              adjust(productData._id, event.target.value);
            }}
          /> */}
        </Card>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // adjust: (_id, value) => dispatch(adjust(_id, value)),
    removeFromCart: (_id) => dispatch(removeFromCart(_id)),
    addToHeart: (_id) => dispatch(addToHeart(_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cartobject);
