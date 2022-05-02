import React, { Component } from "react";
import { withRouter } from "../withRouter/withRouter";

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
    let response = await fetch("http://localhost:780/signup", options);
    if (response.status === 200) {
      this.props.navigate("/login");
    }
  };
  render() {
    return (
      <div className="board signupboard">
        <input
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
          type="tel"
          placeholder="phone number"
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
        </button>
      </div>
    );
  }
}

export default withRouter(Signup);
