import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  addToHeart,
} from "../../../../state/shopping/shopping-actions";
import "./singleobject.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Card } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  SelectOutlined,
} from "@ant-design/icons";

class Singleobject extends Component {
  render() {
    const productData = this.props.productData;
    const addToCart = this.props.addToCart;
    const addToHeart = this.props.addToHeart;
    const isLogged = this.props.isLogged;
    return (
      <>
        <Card
          hoverable
          style={{
            width: "240px",
            margin: "5px",
          }}
          cover={<img alt="example" src={productData.image} height="180px" />}
          actions={[
            <HeartOutlined
              key="ShoppingCartOutlined"
              id="red2"
              onClick={
                isLogged
                  ? () => addToHeart(productData._id)
                  : () => swal("Login first", "or signup", "error")
              }
            />,
            <Link to={`/product/${productData._id}`}>
              <SelectOutlined key="SelectOutlined" />
            </Link>,
            <ShoppingCartOutlined
              key="DeleteOutlined"
              onClick={() => addToCart(productData._id)}
            />,
          ]}
        >
          <Card.Meta
            title={productData.title}
            // style={{ backgroundColor: "red" }}
            style={{ height: "2rem" }}
            className="meta-heart"
          />
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
    addToCart: (_id) => dispatch(addToCart(_id)),
    addToHeart: (_id) => dispatch(addToHeart(_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Singleobject);
