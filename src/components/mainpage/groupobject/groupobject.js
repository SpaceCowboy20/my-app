import React, { Component } from "react";
import Singleobject from "./singleobject/singleobject";
import "./singleobject/singleobject";
import { connect } from "react-redux";

class Groupobject extends Component {
  render() {
    const products = this.props.products;

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

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Groupobject);
