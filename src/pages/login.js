import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    console.log(this.props.isLogged);
    let login = this.props.login;
    return (
      <div className="board signupboard">
        <input
          placeholder="username"
          className="username"
          onChange={(event) => this.setState({ username: event.target.value })}
          value={this.state.username}
        ></input>
        <input
          placeholder="password"
          className="password"
          type="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          value={this.state.password}
        ></input>
        <button className="button" onClick={login}>
          Login
        </button>
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
    login: () => {
      dispatch({ type: "LOGIN" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
