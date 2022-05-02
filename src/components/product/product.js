import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Product({ products }) {
  let { id } = useParams();
  let filter = products.filter((items) => (items._id === id ? true : false));
  let item = filter[0];
  return (
    <div>
      <div className="board">
        <img src={item.image} alt="" width={500} height={500} />
        <h2>{item.title}</h2>
        <h5>{item.description}</h5>
        <h1>{item.price}</h1>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Product);
