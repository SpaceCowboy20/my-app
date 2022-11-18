import React, { Component } from "react";
import "./cartobject.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, InputNumber } from "antd";
import {
  DeleteOutlined,
  SelectOutlined,
  HeartOutlined,
} from "@ant-design/icons";
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
            <HeartOutlined id="red" key="Heart"/>,
            <Link to={`/product/${productData._id}`}>
              <SelectOutlined key="Select"/>
            </Link>,
            <DeleteOutlined
              key="DeleteOutlined"
              onClick={() => {
                removeFromCart(productData._id);
              }}
            />,
          ]}
        >
          <h2>{productData.title}</h2>
          <div className="innercartbox">
            <img src={productData.image} alt="" className="cart-img" />
            <p className="texxt">{description}</p>
          </div>
          <h2 style={{textAlign:"right", marginRight:"2rem"}} id="pricecartbox">{productData.price}</h2>
          {/* <InputNumber
            className="quantity"
            min={1}
            value={this.state.qty}
            onChange={(event) => {
              this.setState({ qty: event.target.value });
              adjust(productData._id, event.target.value);
            }}
          /> */}
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
        </Card>
      </>
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
