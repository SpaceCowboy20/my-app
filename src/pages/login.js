import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../withRouter/withRouter";
import { compose } from "redux";
import { deleteHeart, getHearts } from "../state/shopping/shopping-actions";
import { login } from "../state/isLogged/isLogged-actions";

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
        console.log(data.hearts);

        this.props.getHearts(data.hearts);
      };
      getHeart();
      this.props.navigate("/");
    }
  };

  render() {
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
        <button
          className="button"
          onClick={() => {
            this.login(this.state.username, this.state.password);
          }}
        >
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
    deleteHeart: () => dispatch(deleteHeart()),
    getHearts: (hearts) => dispatch(getHearts(hearts)),
    login: () => dispatch(login()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
