import React, { Component } from "react";
import { connect } from "react-redux";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import { updateSearch } from "../state/search/search-actions";

class Search extends Component {
  render() {
    const products = this.props.products;
    const searchTerm = this.props.searchWord;
    return (
      <div>
        <div className="board">
          {products
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((product, index) => (
              <Singleobject key={index} productData={product} />
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    searchWord: state.search.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchupdate: (word) => dispatch(updateSearch(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
