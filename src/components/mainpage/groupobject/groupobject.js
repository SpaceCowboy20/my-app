import React, { Component } from "react";
import Singleobject from "./singleobject/singleobject";
import "./singleobject/singleobject";
import { connect } from "react-redux";

class Groupobject extends Component {
  render() {
    const products = this.props.products;

    //push full array to db
    /////////////////////////////////
    /*  let pushToDb = async () => {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products,
        }),
      };
      let reponse = await fetch("http://localhost:780/addproduct", options);
      console.log(reponse);
    };
    pushToDb(); */

    const _ = require("lodash");
    const sample = _.sampleSize(products, 12);
    return (
      <div className="pad">
        {sample.map((prod, index) => (
          <Singleobject key={index} productData={prod} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.shop.products,
});

export default connect(mapStateToProps)(Groupobject);
