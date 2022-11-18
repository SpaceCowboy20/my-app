import React, { Component } from "react";
import Mainpage from "../components/mainpage/mainpage";

class Home extends Component {
  render() {
    let cats = this.props.cats;
    return <Mainpage cats={cats}></Mainpage>;
  }
}

export default Home;
