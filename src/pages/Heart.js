import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Heartobject from "../components/heart/heartobject";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
  ShopOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

class Heart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  getItem(label, key, icon, children, disabled, other) {
    return {
      key,
      icon,
      children,
      label,
      disabled,
      other,
    };
  }
  render() {
    const items = [
      this.getItem(
        <Link to="/dashboard">tableau de bord</Link>,
        "dashboard",
        <AppstoreOutlined />
      ),
      this.getItem(
        <Link to="/profile">informations utilisateur</Link>,
        "profile",
        <UserOutlined />
      ),
      this.getItem(
        <Link to="/heart">wishliste</Link>,
        "heart",
        <HeartOutlined />
      ),
      this.getItem(
        <Link to="/cart">panier</Link>,
        "cart",
        <ShoppingCartOutlined />
      ),
      this.getItem(
        <Link to="/orders">commandes</Link>,
        "orders",
        <CarryOutOutlined />
      ),
      this.getItem(
        <Link to="/profile">devenir vendeur</Link>,
        "seller",
        <ShopOutlined />,
        null,
        true
      ),
    ];
    const heart = this.props.heart;
    return (
      <>
        <div className="board centered">
          <Menu
            style={{
              width: 256,
              height: "28rem",
              position: "absolute",
              left: "1rem",
              borderRadius: ".4rem",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            className="menudrop"
            defaultSelectedKeys={["heart"]}
            items={items}
          />
          <div className="pad profil2 cartheart">
            {heart.map((product, index) => (
              <Heartobject key={index} productData={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heart: state.shop.heart,
  };
};

export default connect(mapStateToProps)(Heart);
