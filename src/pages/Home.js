import React, { Component } from "react";
import Mainpage from "../components/mainpage/Mainpage";

class Home extends Component {
  render() {
    let cats = this.props.cats;
    return (
      <div>
        <Mainpage cats={cats}></Mainpage>
      </div>
    );
  }
}

export default Home;
