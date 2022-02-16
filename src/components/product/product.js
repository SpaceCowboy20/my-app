import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="board">
        <img
          src="https://goat.com.au/wp-content/uploads/2018/11/Spike-Blade-Runner.png"
          alt=""
          width={500}
          height={500}
        />
        <h2>SpaceCowboy</h2>
        <h5>description</h5>
        <h1>{this.props.id}</h1>
        <button></button>
        <button></button>
      </div>
    );
  }
}

export default Product;
