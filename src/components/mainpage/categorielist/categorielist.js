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
                <div className="card2" key={index}>
                  <img src={item.image} alt="" className="cardimage"></img>s
                  <div className="textdiv">
                    <p className="nom">{item.title}</p>
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
