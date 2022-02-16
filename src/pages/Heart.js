import React, { Component } from "react";
import { connect } from "react-redux";
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
            <div className="backstore">tableau de bord</div>
            <div className="backstore">informations utilisateur</div>
            <div className="backstore">commandes</div>
            <div className="backstore">panier</div>
            <div className="backstore selected">wishliste</div>
            <div className="backstore">devenir vendeur</div>
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
