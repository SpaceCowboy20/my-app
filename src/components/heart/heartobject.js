import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromHeart } from "../../state/shopping/shopping-actions";
import { Card } from "antd";
import {
  DeleteOutlined,
  ShoppingCartOutlined,
  SelectOutlined,
} from "@ant-design/icons";

class Heartobject extends Component {
  render() {
    const productData = this.props.productData;
    const removeFromHeart = this.props.removeFromHeart;
    const { Meta } = Card;
    return (
      <>
        {/* <div className="cartobject">
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
              removeFromHeart(productData._id);
            }}
            />
        </div>
      </div> */}
        <Card
          hoverable
          style={{
            width: "240px",
            margin: "5px",
          }}
          loading={false}
          cover={<img alt="example" src={productData.image} height="180px" />}
          actions={[
            <ShoppingCartOutlined key="ShoppingCartOutlined" />,
            <SelectOutlined key="SelectOutlined" />,
            <DeleteOutlined key="DeleteOutlined" onClick={() => {
              removeFromHeart(productData._id);
            }}/>
          ]}
            //<CloseSquareOutlined />
        >
          <Meta
            title={productData.title}
            description={productData.description}
            // style={{ backgroundColor: "red" }}
            style={{ height: "2rem" }}
            className="meta-heart"
          />
        </Card>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromHeart: (_id) => dispatch(removeFromHeart(_id)),
  };
};

export default connect(null, mapDispatchToProps)(Heartobject);
