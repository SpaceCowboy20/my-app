import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Signup from "./components/signup/signup";
import Mainpage from "./components/mainpage/mainpage";
import "./App.css";
import Sidemenu from "./components/sidemenu/sidemenu";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <Navbar></Navbar>
      {/*<div
        style={{
          height: "30rem",
          width: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{account}</h1>
        <button onClick={() => depositMoney(100)}>+</button>
        <button onClick={() => withdrawMoney(100)}>-</button>
      </div>*/}
      <Sidemenu></Sidemenu>
      <Mainpage></Mainpage>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;
