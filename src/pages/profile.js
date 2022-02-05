import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="board">
          <div className="pad profil1">
            <div className="backstore">tableau de bord</div>
            <div className="backstore selected">informations utilisateur</div>
            <div className="backstore">commandes</div>
            <div className="backstore">panier</div>
            <div className="backstore">wishliste</div>
            <div className="backstore">devenir vendeur</div>
          </div>
          <div className="pad profil2">
            <div className="pdp"></div>
          </div>
        </div>
      </div>
    );
  }
}
