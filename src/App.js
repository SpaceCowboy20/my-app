import Navbar from "./components/navbar/navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withRouter } from "./withRouter/withRouter";
import { compose } from "redux";
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
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
      auto: [],
      supermarche: [],
      autres: [],
      sport: [],
      maison: [],
      sante: [],
      informatique: [],
      mode: [],
      audiovisuel: [],
      telephone: [],
      bebe: [],
      jeux: [],
    };
  }
  componentDidMount() {
    let getprod = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await fetch("http://localhost:780/allprod", options)
        .then((res) => res.json())
        .then((res) => res.products);

      let getall = this.props.getallProds;
      getall(response);
    };
    getprod();

    let getcat = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let cats = await fetch("http://localhost:780/getcats", options)
        .then((res) => res.json())
        .then((res) => res.cats);
      this.setState({ cats });
    };
    getcat();
  }
  componentDidUpdate(prevProps, prevState) {
    let updatecat = () => {
      let cats = this.state.cats;
      let autoarray = cats.filter((item) =>
        item._id == "6218f062af482a0a7dc97712" ? true : false
      );
      let superarray = cats.filter((item) =>
        item._id == "621651b8832704be3f48ed11" ? true : false
      );
      let autresarray = cats.filter((item) =>
        item._id == "6218f2f2af482a0a7dc97715" ? true : false
      );
      let sportarray = cats.filter((item) =>
        item._id == "6218f524af482a0a7dc97719" ? true : false
      );
      let maisonarray = cats.filter((item) =>
        item._id == "6219349a8a47f88b161ada44" ? true : false
      );
      let santearray = cats.filter((item) =>
        item._id == "6219374c8a47f88b161ada47" ? true : false
      );
      let infoarray = cats.filter((item) =>
        item._id == "6219383a8a47f88b161ada4a" ? true : false
      );
      let modearray = cats.filter((item) =>
        item._id == "62193ace8a47f88b161ada4d" ? true : false
      );
      let audiovisuelarray = cats.filter((item) =>
        item._id == "62193cc08a47f88b161ada50" ? true : false
      );
      let telephonearray = cats.filter((item) =>
        item._id == "62193dc78a47f88b161ada53" ? true : false
      );
      let bebearray = cats.filter((item) =>
        item._id == "62193f5e8a47f88b161ada56" ? true : false
      );
      let jeuxarray = cats.filter((item) =>
        item._id == "621940738a47f88b161ada59" ? true : false
      );
      let auto = autoarray[0].products;
      let supermarche = superarray[0].products;
      let autres = autresarray[0].products;
      let sport = sportarray[0].products;
      let maison = maisonarray[0].products;
      let sante = santearray[0].products;
      let informatique = infoarray[0].products;
      let mode = modearray[0].products;
      let audiovisuel = audiovisuelarray[0].products;
      let telephone = telephonearray[0].products;
      let bebe = bebearray[0].products;
      let jeux = jeuxarray[0].products;
      if (prevState === this.state) {
        this.setState({
          auto,
          supermarche,
          autres,
          sport,
          maison,
          sante,
          informatique,
          mode,
          audiovisuel,
          telephone,
          bebe,
          jeux,
        });
      }
    };
    updatecat();
  }
  render() {
    let cats = this.state.cats;
    let auto = this.state.auto;
    let supermarche = this.state.supermarche;
    let autres = this.state.autres;
    let sport = this.state.sport;
    let maison = this.state.maison;
    let sante = this.state.sante;
    let informatique = this.state.informatique;
    let mode = this.state.mode;
    let audiovisuel = this.state.audiovisuel;
    let telephone = this.state.telephone;
    let bebe = this.state.bebe;
    let jeux = this.state.jeux;
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home cats={cats} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auto" element={<Auto prods={auto} />} />
            <Route path="/autres" element={<Autres prods={autres} />} />
            <Route path="/bebe" element={<Bebe prods={bebe} />} />
            <Route path="/electro" element={<Electro prods={audiovisuel} />} />
            <Route
              path="/informatique"
              element={<Informatique prods={informatique} />}
            />
            <Route path="/jeux" element={<Jeux prods={jeux} />} />
            <Route path="/maison" element={<Maison prods={maison} />} />
            <Route path="/mode" element={<Mode prods={mode} />} />
            <Route path="/sante" element={<Sante prods={sante} />} />
            <Route path="/sport" element={<Sport prods={sport} />} />
            <Route
              path="/supermarche"
              element={<Supermarche prods={supermarche} />}
            />
            <Route
              path="/telephone"
              element={<Telephone prods={telephone} />}
            />
            <Route path="/heart" element={<Heart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    isLogged: state.isLogged.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getallProds: (products) => dispatch(getallProds(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
