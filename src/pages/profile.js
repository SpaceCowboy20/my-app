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
import empty from "../assets/empty.jpg";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      newpassword: "",
      Email: "",
      tel: "",
      country: "",
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
          <div className="formprofile">
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                width: "100%",
                height: "fit-content",
              }}
            >
              <Form.Item label="Username ">
                <Input
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                  value={this.state.username}
                />
              </Form.Item>
              <Form.Item label="Password ">
                <Input
                  type="password"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  value={this.state.password}
                />
              </Form.Item>
              <Form.Item label="New Password ">
                <Input
                  status="error"
                  type="password"
                  onChange={(event) =>
                    this.setState({ newpassword: event.target.value })
                  }
                  value={this.state.newpassword}
                />
              </Form.Item>
              <Form.Item label="Email ">
                <Input
                  type="email"
                  onChange={(event) =>
                    this.setState({ Email: event.target.value })
                  }
                  value={this.state.Email}
                />
              </Form.Item>
              <Form.Item label="Phone Number ">
                <Input
                  type="tel"
                  onChange={(event) =>
                    this.setState({ tel: event.target.value })
                  }
                  value={this.state.tel}
                />
              </Form.Item>

              <Form.Item label="Country ">
                <Select
                  defaultValue={this.state.country}
                  onChange={(value) => {
                    this.setState({ country: value });
                  }}
                >
                  <Select.Option value="Algiers">Algiers</Select.Option>
                  <Select.Option value="Setif">Setif</Select.Option>
                  <Select.Option value="Oran">Oran</Select.Option>
                  <Select.Option value="Constantine">Constantine</Select.Option>
                  <Select.Option value="Annaba">Annaba</Select.Option>
                  <Select.Option value="Tlemcen">Tlemcen</Select.Option>
                </Select>
              </Form.Item>
              <div className="btnbox">
                <Button type="primary" style={{}}>
                  Update
                </Button>
              </div>
            </Form>
          </div>
          <Image
            width={200}
            height={200}
            className
            src="error"
            fallback={empty}
            style={{ margin: "2rem" }}
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
