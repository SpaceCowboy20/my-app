import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categorielist extends Component {
  render() {
    let cats = this.props.cats;
    return (
      <div>
        <div className="pad">
          <div className="pad-title-box">
            <p className="pad-title-text">Catégories</p>
          </div>
          {cats.map((item, index) => {
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
