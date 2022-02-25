import Navbar from "./components/navbar/navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Auto from "./pages/Auto";
import Autres from "./pages/autres";
import Bebe from "./pages/bebe";
import Electro from "./pages/electro";
import Informatique from "./pages/informatique";
import Jeux from "./pages/jeux";
import Mode from "./pages/mode";
import Sante from "./pages/sante";
import Sport from "./pages/sport";
import Telephone from "./pages/telephone";
import Heart from "./pages/Heart";
import Cart from "./pages/cart";
import Maison from "./pages/maisonbureau";
import Supermarche from "./pages/supermarche";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Search from "./pages/search";
import Product from "./components/product/product";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getallProds } from "./state/shopping/shopping-actions";

class App extends Component {
  componentDidMount() {
    let getprod = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await fetch("http://192.168.2.133:780/allprod", options)
        .then((res) => res.json())
        .then((res) => res.products);

      let getall = this.props.getallProds;
      getall(response);
    };
    getprod();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auto" element={<Auto />} />
            <Route path="/autres" element={<Autres />} />
            <Route path="/bebe" element={<Bebe />} />
            <Route path="/electro" element={<Electro />} />
            <Route path="/informatique" element={<Informatique />} />
            <Route path="/jeux" element={<Jeux />} />
            <Route path="/maison" element={<Maison />} />
            <Route path="/mode" element={<Mode />} />
            <Route path="/sante" element={<Sante />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/supermarche" element={<Supermarche />} />
            <Route path="/telephone" element={<Telephone />} />
            <Route path="/heart" element={<Heart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getallProds: (products) => dispatch(getallProds(products)),
  };
};

export default connect(null, mapDispatchToProps)(App);
