import React, { Component } from "react";
import { connect } from "react-redux";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import Sidemenu from "../components/sidemenu/sidemenu";

class Supermarche extends Component {
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
        <div className="box5">
          <div className="pad">
            {prods.map((prod) => (
              <Singleobject key={prod.id} productData={prod} />
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

export default connect(mapStateToProps)(Supermarche);
