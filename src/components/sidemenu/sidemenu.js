import React, { Component } from "react";
import { Link } from "react-router-dom";
import { categorielist } from "../datasamples/categorielist";

class Sidemenu extends Component {
  render() {
    return (
      <div className="sidemenubox">
        <ul type="none" className="categorielist">
          <Link to="/">
            <li>Home</li>
          </Link>
          {categorielist.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <li key={index} className={item.cName}>
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidemenu;
