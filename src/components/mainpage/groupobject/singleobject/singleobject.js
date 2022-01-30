import React, { Component } from "react";
import "./singleobject.css";
import * as BsIcons from "react-icons/bs";

class Singleobject extends Component {
  render() {
    const productData = this.props.productData;
    return (
      <div>
        <div className="categorie-item-box">
          <div className="img-div">
            <img
              className="img-cat-object"
              src={productData.image}
              alt={productData.title}
            />
          </div>
          <div className="text-div">
            <div className="img-cat-text">{productData.title}</div>
            <div>
              <BsIcons.BsPlusCircle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Singleobject;
