import React, { Component } from "react";
import "./banner.css";
import left from "./imgs/left.png";
import right from "./imgs/right.png";

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="bannerbox">
          <div className="left arrow">
            <img className="imageleft" src={left} alt=""></img>
          </div>
          <div className="right arrow">
            <img className="imageright" src={right} alt=""></img>
          </div>
          <div className="bannerfooter"></div>
        </div>
      </div>
    );
  }
}

export default Banner;
