import React, { Component } from "react";
import Sidebanner from "./sidebanner/sidebanner";
import Banner from "./banner/banner";
import "./banners.css";

class Banners extends Component {
  render() {
    return (
      <div>
        <div className="bannersbox">
          <Banner></Banner>
          <Sidebanner></Sidebanner>
        </div>
      </div>
    );
  }
}

export default Banners;
