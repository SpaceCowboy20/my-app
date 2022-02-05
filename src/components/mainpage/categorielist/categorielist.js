import React, { Component } from "react";
import { Link } from "react-router-dom";
import { categorielist } from "../../datasamples/categorielist";

class Categorielist extends Component {
  render() {
    return (
      <div>
        <div className="pad">
          <div className="pad-title-box">
            <p className="pad-title-text">Catégories</p>
          </div>
          {categorielist.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <div className="card" key={index}>
                  <div className="card-img-box">
                    <img src={item.image} alt="" className="card-img"></img>
                  </div>
                  <div className="card-text-box">
                    <p className="card-text">{item.title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Categorielist;
