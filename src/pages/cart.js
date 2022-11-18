import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Card, Button } from "antd";
import "antd/dist/antd.css";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
  ShopOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import Cartobject from "../components/cart/cartobject";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      totalItems: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    let price = 0;
    let itemcount = 0;
    let cart = this.props.cart;
    cart.forEach((item) => {
      itemcount += item.qty;
      price += item.qty * item.price;
    });
    if (prevState === this.state) {
      this.setState({ totalPrice: price, totalItems: itemcount });
    }
  }
  componentDidMount() {
    let price = 0;
    let itemcount = 0;
    let cart = this.props.cart;
    cart.forEach((item) => {
      itemcount += item.qty;
      price += item.qty * item.price;
    });
    this.setState({ totalPrice: price, totalItems: itemcount });
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
    const cart = this.props.cart;
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
            defaultSelectedKeys={["cart"]}
            items={items}
          />
          <div className="pad profil2 cartheart carpad">
            {/* <Cartobject key={index} productData={prod} /> */}
            <div className="cart-items">
              {cart.map((prod, index) => (
                                  <Cartobject key={index} productData={prod}/>
              ))}
            </div>
            <div className="cart-total">
                <Card style={{height:"100%"}}>

              <h2>Total</h2>
              <p>total items {this.state.totalItems}</p>
              <p>total price {this.state.totalPrice}</p>
              <Link to="/checkout">
                <Button type="primary">Proceed</Button>
              </Link>
                </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
