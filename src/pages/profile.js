import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../withRouter/withRouter";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Menu, Button, Card, Image, Form, Input, Select } from "antd";
import "antd/dist/antd.css";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
  ShopOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"hou",
      password:1234,
      email:"",
      phone:"",
      country:""
    };
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
    const { Meta } = Card;
    return (
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
          defaultSelectedKeys={["profile"]}
          items={items}
        />
        <div className="pad profil2 cartheart">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            style={{ width: "600px", height: "fit-content" }}
          >
            <Form.Item label="Username">
              <Input
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
                value={this.state.username}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                type="password"
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                value={this.state.password}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="email"
                onChange={(event) =>
                  this.setState({ Email: event.target.value })
                }
                value={this.state.Email}
              />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input
                type="tel"
                onChange={(event) => this.setState({ tel: event.target.value })}
                value={this.state.tel}
              />
            </Form.Item>

            <Form.Item label="Country">
              <Select defaultValue="Algiers">
                <Select.Option value="Algiers">Algiers</Select.Option>
                <Select.Option value="Setif">Setif</Select.Option>
                <Select.Option value="Oran">Oran</Select.Option>
                <Select.Option value="Constantine">Constantine</Select.Option>
                <Select.Option value="Annaba">Annaba</Select.Option>
                <Select.Option value="Tlemcen">Tlemcen</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <Image
            width={200}
            height={200}
            className
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Button
            onClick={() => {
              localStorage.removeItem("TOKEN");
              this.props.dispatch({
                type: "LOGOUT",
              });
              this.props.navigate("/");
            }}
            className="primary"
            id="logoutBtn"
            ghost
          >
            Log Out
          </Button>
        </div>
        {/* <div className="pad profil1">
            <Link to="/dashboard">
              <div className="backstore">tableau de bord</div>
            </Link>
            <Link to="/profile">
              <div className="backstore selected">informations utilisateur</div>
            </Link>
            <Link to="/heart">
              <div className="backstore">wishliste</div>
            </Link>
            <Link to="/cart">
              <div className="backstore">panier</div>
            </Link>
            <Link to="/orders">
              <div className="backstore">commandes</div>
            </Link>
            <Link to="/profile">
              <div className="backstore">devenir vendeur</div>
            </Link>
          </div>
          <div className="pad profil2">
            <div className="pdp"></div>
            {<button
              style={{
                height: "2rem",
                width: "4rem",
                position: "absolute",
                bottom: "10",
                right: "10",
              }}
              onClick={() => {
                localStorage.removeItem("TOKEN");
                this.props.dispatch({
                  type: "LOGOUT",
                });
                this.props.navigate("/");
              }}
            >
              logout
            </button>}
            
          </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged.isLogged,
  };
};

export default compose(withRouter, connect(mapStateToProps))(Profile);
