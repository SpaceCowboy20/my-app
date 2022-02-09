import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="board signupboard">
        <form>
          <input
            placeholder="username"
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
            value={this.state.username}
          ></input>
          <input
            placeholder="password"
            type="password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            value={this.state.password}
          ></input>
        </form>
      </div>
    );
  }
}

export default Login;
