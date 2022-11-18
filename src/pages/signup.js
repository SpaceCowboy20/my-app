import React, { Component } from "react";
import { withRouter } from "../withRouter/withRouter";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      username: "",
      password: "",
      tel: "",
      region: "",
    };
  }
  signup = async (username, password, Email, tel, region) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        Email,
        tel,
        region,
      }),
    };
    let response = await fetch("http://192.168.2.133:780/signup", options);
    if (response.status === 200) {
      this.props.navigate("/login");
    }
  };
  render() {
    return (
      <div
        className="board signupboard signupform"
        style={{ height: "fit-content" }}
      >
        {/* <input
          placeholder="username"
          onChange={(event) => this.setState({ username: event.target.value })}
          value={this.state.username}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          value={this.state.password}
        ></input>
        <input
          placeholder="email"
          type="email"
          onChange={(event) => this.setState({ Email: event.target.value })}
          value={this.state.Email}
        ></input>
        <input
          placeholder="phone number"
          type="tel"
          onChange={(event) => this.setState({ tel: event.target.value })}
          value={this.state.tel}
        ></input>
        <input
          list="country"
          placeholder="région"
          onChange={(event) => {
            this.setState({ region: event.target.value });
          }}
        />
        <datalist id="country">
          <option value="alger"></option>
          <option value="setif"></option>
          <option value="oran"></option>
          <option value="constantine"></option>
          <option value="annaba"></option>
          <option value="tlemcen"></option>
        </datalist>
        <br />
        <button
          onClick={() => {
            this.signup(
              this.state.username,
              this.state.password,
              this.state.Email,
              this.state.tel,
              this.state.region
            );
          }}
        >
          signup
        </button> */}
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
              onChange={(event) => this.setState({ Email: event.target.value })}
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
          {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item> */}

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

          {/* <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item> */}
          <Button
            type="primary"
            className="login-form-button"
            style={{ width: 450 }}
            onClick={() => {
              this.signup(
                this.state.username,
                this.state.password,
                this.state.Email,
                this.state.tel,
                this.state.region
              );
            }}
          >
            Button
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Signup);
