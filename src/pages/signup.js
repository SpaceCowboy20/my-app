import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="board signupboard">
        <form>
          <input placeholder="username"></input>
          <input placeholder="password" type="password"></input>
          <input placeholder="password" type="password"></input>
          <input placeholder="email" type="email"></input>
          <input type="tel" placeholder="phone number"></input>
          <input list="country" placeholder="région" />
          <datalist id="country">
            <option value="alger"></option>
            <option value="setif"></option>
            <option value="oran"></option>
            <option value="constantine"></option>
            <option value="annaba"></option>
            <option value="tlemcen"></option>
          </datalist>
        </form>
      </div>
    );
  }
}

export default Signup;
