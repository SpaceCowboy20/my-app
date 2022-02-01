import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="box1">
          <h1 className="title">Login</h1>
          <input
            className="username"
            type="text"
            placeholder="Username"
          ></input>
          <input
            className="password"
            type="password"
            placeholder="Password"
          ></input>
          <button>Log in</button>
        </div>
      </div>
    );
  }
}

export default Login;
