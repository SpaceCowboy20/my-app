import React, { Component } from "react";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import { connect } from "react-redux";

class Maison extends Component {
  render() {
    const product = this.props.products;
    const cat = product.filter((item) =>
      item.categorie === "Maison" ? true : false
    );
    return (
      <div>
        <div className="box4">
          <div className="pad">
            {cat.map((prod, index) => (
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

export default connect(mapStateToProps)(Maison);
