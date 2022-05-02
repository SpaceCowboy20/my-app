import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAllCart } from "../state/shopping/shopping-actions";
import { withRouter } from "../withRouter/withRouter";
import { compose } from "redux";
// import Singleobject from "../components/mainpage/groupobject/singleobject/singleobject";
// import { Steps } from "antd";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adresse1: "",
      adresse2: "",
      adresse3: "",
      adresse4: "",
      adresse5: "",
    };
  }
  neworder = async () => {
    let adresse1 = this.state.adresse1;
    let adresse2 = this.state.adresse2;
    let adresse3 = this.state.adresse3;
    let adresse4 = this.state.adresse4;
    let adresse5 = this.state.adresse5;
    let products = this.props.cart;
    let status = "Pending";
    let token = JSON.parse(window.localStorage.getItem("TOKEN"));
    let adresse =
      adresse1 +
      " " +
      adresse2 +
      " " +
      adresse3 +
      " " +
      adresse4 +
      " " +
      adresse5;
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: token,
      },
      body: JSON.stringify({
        products,
        adresse,
        status,
      }),
    };

    let response = await fetch("http://localhost:780/neworder", options);
    if (response.status == 200) {
      this.props.deleteAllCart();
      this.props.navigate("/");
    }
  };
  render() {
    // const { Step } = Steps;
    const cart = this.props.cart;
    return (
      <div>
        <div>
          {/* <Steps progressDot current={1} direction="vertical">
              <Step
                title="Finished"
                description="This is a description. This is a description."
              />
              <Step
                title="In Progress"
                description="This is a description. This is a description."
              />
              <Step title="Waiting" description="This is a description." />
            </Steps> */}

          <div
            style={{
              width: "50rem",
              height: "30rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              overflowY: "scroll",
              overflowX: "hidden",
              padding: "1rem",
            }}
          >
            <div style={{ marginTop: "10rem" }}>
              <div>
                <h3>adresse</h3>
              </div>
              <div
                style={{
                  width: "50rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    width: "50rem",
                    height: "5rem",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <input
                    placeholder="Rue et numéro de rue"
                    style={{ height: "2rem", width: "20rem" }}
                    onChange={(event) => {
                      this.setState({ adresse1: event.target.value });
                    }}
                  />
                  <input
                    onChange={(event) => {
                      this.setState({ adresse2: event.target.value });
                    }}
                    placeholder="Apt,suite,bloc,batiment(facultatif)"
                    style={{ height: "2rem", width: "20rem" }}
                  />
                </div>
                <div
                  style={{
                    width: "50rem",
                    height: "5rem",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <input
                    onChange={(event) => {
                      this.setState({ adresse3: event.target.value });
                    }}
                    placeholder="région"
                    style={{ height: "2rem", width: "15rem" }}
                  />
                  <input
                    onChange={(event) => {
                      this.setState({ adresse4: event.target.value });
                    }}
                    placeholder="ville"
                    style={{ height: "2rem", width: "15rem" }}
                  />
                  <input
                    onChange={(event) => {
                      this.setState({ adresse5: event.target.value });
                    }}
                    placeholder="code postale"
                    style={{ height: "2rem", width: "15rem" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>mode de paiement</h3>
              <div style={{ width: "50rem" }}>
                payement à la livraison
                <input type="radio" checked />
                payement par carte
                <input type="radio" disabled />
              </div>
            </div>
            <div style={{ width: "50rem" }}>
              <h3>confirmation produits</h3>
              {cart.map((product, index) => {
                return (
                  <div key={index}>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => {
              this.neworder();
            }}
          >
            proceed
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllCart: () => dispatch(deleteAllCart()),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Checkout);
