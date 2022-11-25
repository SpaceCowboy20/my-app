import React, { Component } from "react";
import { connect } from "react-redux";
import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
import { updateSearch } from "../state/search/search-actions";
import { Pagination } from "antd";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      pageSize: 10,
    };
  }

  render() {
    const products = this.props.products;
    const searchTerm = this.props.searchWord;
    let currentprodpage = products.filter((value) => {
      if (searchTerm === "") {
        return value;
      } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    let prod = currentprodpage.slice(
      0 + (this.state.currentPage - 1) * this.state.pageSize,
      9 + (this.state.currentPage - 1) * this.state.pageSize
    );
    return (
      <>
        <div className="board">
          {currentprodpage.map((product, index) => (
            <Singleobject key={index} productData={product} />
          ))}
          <Pagination
            showSizeChanger
            // onShowSizeChange={onShowSizeChange}
            current={this.state.currentPage}
            total={products.length}
            pageSizeOptions={[10, 20, 50, 100]}
            defaultPageSize={10}
            // hideOnSinglePage
            // showSizeChanger={false}
            onChange={(page, pageSize) => {
              this.setState({ currentPage: page });
              this.setState({ pageSize });
            }}
          />
        </div>
      </>
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
