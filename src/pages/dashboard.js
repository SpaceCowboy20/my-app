import React, { Component } from "react";
import { Menu, Button, Card, Image } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
  ShopOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default class dashboard extends Component {
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
    const gridStyle = {
      width: "25%",
      height: "20rem",
      textAlign: "center",
    };
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
            defaultSelectedKeys={["dashboard"]}
            items={items}
          />
          <div className="pad profil2 cartheart">
            <Card title="Dashboard" style={{ width: "100%",height:"100%" }}>
              <Card.Grid style={gridStyle}>information utilisateur</Card.Grid>
              <Card.Grid style={gridStyle}>Wishlist</Card.Grid>
              <Card.Grid style={gridStyle}>Panier</Card.Grid>
              <Card.Grid style={gridStyle}>commandes</Card.Grid>
            </Card>
            {/* <Card
              hoverable
              style={{
                width: "fitcontent",
                maxWidth: 250,
                // maxHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              cover={
                <img
                  alt="fe"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                ></img>
              }
            >
              <Card.Meta
                title="Usernamecqsddqsdccccc"
                description="Emailazedd"
                style={{ padding: 0, width: "", textOverflow: "ellipsis" }}
              />
            </Card> */}
          </div>
        </div>
      </>
    );
  }
}
