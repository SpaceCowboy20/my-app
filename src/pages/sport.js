import React, { Component } from "react";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import { connect } from "react-redux";
import Sidemenu from "../components/sidemenu/sidemenu";

class Sport extends Component {
  render() {
    let prods = this.props.prods.map((item) => {
      let products = this.props.products;
      let filtered = products.filter((item2) =>
        item2._id == item ? true : false
      );
      return filtered[0];
    });
    return (
      <div>
        <Sidemenu />
        <div className="box4">
          <div className="pad">
            {prods.map((prod, index) => (
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

export default connect(mapStateToProps)(Sport);
