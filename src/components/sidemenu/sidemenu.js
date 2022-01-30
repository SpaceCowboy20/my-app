import React, { Component } from "react";
import "./sidemenu.css";
import { categorielist } from "../datasamples/categorielist";

class Sidemenu extends Component {
  render() {
    return (
      <div>
        <div className="sidemenubox">
          <ul type="none" className="categorielist">
            {categorielist.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidemenu;
