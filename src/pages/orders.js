import React, { Component } from "react"
import {Menu} from "antd"

import { Link } from "react-router-dom";
import {
    HeartOutlined,
    ShoppingCartOutlined,
    AppstoreOutlined,
    UserOutlined,
    ShopOutlined,
    CarryOutOutlined,
  } from "@ant-design/icons";

class Orders extends Component {
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
            }}
            className="menudrop"
            defaultSelectedKeys={["orders"]}
            items={items}
          />
          <div className="pad profil2 cartheart"></div>
        </div>
      </>
    );
  }
}
export default Orders;
