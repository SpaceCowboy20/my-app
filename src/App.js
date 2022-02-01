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

function App() {
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
