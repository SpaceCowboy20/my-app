import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../withRouter/withRouter";
import { compose } from "redux";
import { deleteHeart, getHearts } from "../state/shopping/shopping-actions";
import { login } from "../state/isLogged/isLogged-actions";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  login = async (username, password) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    let response = await fetch("http://localhost:780/login", options).then(
      (res) => res.json()
    );
    if (response.status === "success") {
      this.props.login();
      localStorage.setItem("TOKEN", JSON.stringify(response.token));
      let getHeart = async () => {
        let token = JSON.parse(window.localStorage.getItem("TOKEN"));

        let options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            TOKEN: token,
          },
        };
        let response = await fetch("http://localhost:780/getheart", options);
        let data = await response.json();

        this.props.getHearts(data.hearts);
      };
      getHeart();
      this.props.navigate("/");
    }
  };

  render() {
    return (
      <div className="board signupboard">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
              value={this.state.username}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
              value={this.state.password}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                this.login(this.state.username, this.state.password);
              }}
              type="primary"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </Form.Item>
        </Form>
      </div>
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
    deleteHeart: () => dispatch(deleteHeart()),
    getHearts: (hearts) => dispatch(getHearts(hearts)),
    login: () => dispatch(login()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
