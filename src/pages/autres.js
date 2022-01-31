import React, { Component } from "react";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import { connect } from "react-redux";

class Autres extends Component {
  render() {
    const product = this.props.products[11].products;
    console.log(product);
    return (
      <div>
        <div className="box4">
          <div className="pad">
            {product.map((prod, index) => (
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

export default connect(mapStateToProps)(Autres);
