import React, { Component } from "react";
import { categorielist } from "../../datasamples/categorielist";
import "./categorielist.css";

class Categorielist extends Component {
  render() {
    return (
      <div>
        <div className="pad">
          <div className="cat-title">
            <p className="text">Catégories</p>
          </div>
          {categorielist.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="img-div">
                  <img src={item.image} alt="" className="img-box"></img>
                </div>
                <div className="text-div">
                  <p className="img-cat-text">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Categorielist;
