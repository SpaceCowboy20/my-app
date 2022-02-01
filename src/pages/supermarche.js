import React, { Component } from "react";
import { connect } from "react-redux";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";

class Supermarche extends Component {
  render() {
    const product = this.props.products;
    const cat = product.filter((item) =>
      item.categorie === "supermarche" ? true : false
    );
    return (
      <div>
        <div className="box5">
          <div className="pad">
            {cat.map((prod) => (
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
