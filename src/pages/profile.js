import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../withRouter/withRouter";
import { compose } from "redux";

class Profile extends Component {
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
            <button
              style={{
                height: "2rem",
                width: "4rem",
                position: "absolute",
                bottom: "10",
                right: "10",
              }}
              onClick={() => {
                localStorage.removeItem("TOKEN");
                this.props.dispatch({
                  type: "LOGOUT",
                });
                this.props.navigate("/");
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged.isLogged,
  };
};

export default compose(withRouter, connect(mapStateToProps))(Profile);
