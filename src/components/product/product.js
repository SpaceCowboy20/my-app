import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import parse from 'html-react-parser';


function Product({ products }) {
  let { id } = useParams();
  let filter = products.filter((items) => (items._id === id ? true : false));
  let item = filter[0];
  let desc = item.description
  return (
    <>
      <div className="board">
        <img src={require('../../'+item.image)} alt="" width={500} height={500} />
        <h2>{item.name}</h2>
        <h5>{parse(desc)}</h5>
        <h1>{item.price}</h1>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Product);
