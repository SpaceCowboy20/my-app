import React, { Component } from "react";
import { product } from "../components/datasamples/sample";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div className="box4">
          <div className="pad">
            {product[10].products.map((prod, index) => (
              <Singleobject key={index} productData={prod} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
