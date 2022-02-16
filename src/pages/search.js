import React, { Component } from "react";
import { connect } from "react-redux";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }
  render() {
    const products = this.props.products;
    const searchTerm = this.state.searchTerm;
    return (
      <div>
        <div className="board">
          <div className="search-page-box">
            <input
              onChange={(event) => {
                this.setState({ searchTerm: event.target.value });
              }}
            />
          </div>
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
  };
};

export default connect(mapStateToProps)(Search);
