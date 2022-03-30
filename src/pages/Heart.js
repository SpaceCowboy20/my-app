import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Heartobject from "../components/heart/heartobject";

class Heart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const heart = this.props.heart;
    return (
      <div>
        <div className="board">
          <div className="pad profil1">
            <Link to="/dashboard">
              <div className="backstore">tableau de bord</div>
            </Link>
            <Link to="/profile">
              <div className="backstore">informations utilisateur</div>
            </Link>
            <Link to="/heart">
              <div className="backstore selected">wishliste</div>
            </Link>
            <Link to="/cart">
              <div className="backstore">panier</div>
            </Link>
            <Link to="orders">
              <div className="backstore">commandes</div>
            </Link>
            <Link to="heart">
              <div className="backstore">devenir vendeur</div>
            </Link>
          </div>
          <div className="pad profil2">
            {heart.map((product, index) => (
              <Heartobject key={index} productData={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heart: state.shop.heart,
  };
};

export default connect(mapStateToProps)(Heart);
