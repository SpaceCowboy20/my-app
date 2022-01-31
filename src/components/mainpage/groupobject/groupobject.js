import React, { Component } from "react";
import Singleobject from "./singleobject/singleobject";
import "./groupobject.css";
import "./singleobject/singleobject";
import { connect } from "react-redux";

class Groupobject extends Component {
  render() {
    const products = this.props.products[0].products;
    console.log(products);
    return (
      <div>
        <div className="pad">
          {products.map((prod) => (
            <Singleobject key={prod.id} productData={prod} />
          ))}
        </div>
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
