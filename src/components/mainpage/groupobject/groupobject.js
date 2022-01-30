import React, { Component } from "react";
import Singleobject from "./singleobject/singleobject";
import "./groupobject.css";
import "./singleobject/singleobject";
import { product } from "../../datasamples/sample";

class Groupobject extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="categoriegroupo">
            <h2>catégorie</h2>
          </div>
          <div className="groupobjectbox">
            {product[0].products.map((prod) => (
              <Singleobject key={prod.id} productData={prod} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Groupobject;
