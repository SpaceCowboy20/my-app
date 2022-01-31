import React, { Component } from "react";
import { product } from "../components/datasamples/sample";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import { connect } from "react-redux";

class Bebe extends Component {
  render() {
    return (
      <div>
        <div className="box4">
          <div className="pad">
            {product[8].products.map((prod, index) => (
              <Singleobject key={index} productData={prod} />
            ))}
          </div>
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

export default connect(mapStateToProps)(Bebe);
