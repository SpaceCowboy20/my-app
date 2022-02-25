import React, { Component } from "react";
import Singleobject from "./singleobject/singleobject";
import "./singleobject/singleobject";
import { connect } from "react-redux";
import { getallProds } from "../../../state/shopping/shopping-actions";

class Groupobject extends Component {
  componentDidMount() {
    let getprod = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await fetch("http://192.168.2.133:780/allprod", options)
        .then((res) => res.json())
        .then((res) => res.products);

      let getall = this.props.getallProds;
      getall(response);
    };
    getprod();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    getallProds: (products) => dispatch(getallProds(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groupobject);
