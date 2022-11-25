import React, { Component } from "react";
// import Categorielist from "./categorielist/categorielist";
import Groupobject from "./groupobject/groupobject";
import Carousell from "../carousel/carousel";
import reparation from "../../assets/reparation.png";
import creation from "../../assets/creation.png";

class Mainpage extends Component {
  render() {
    // let cats = this.props.cats;
    return (
      <><div className="board" style={{display:'flex',justifyContent:"space-around", alignItems:"center"}}>
          <img width={300} height={500} src={reparation} alt="" />
        <Carousell />
        <img width={300} height={500} src={creation} alt="" />
          </div>

        {/* <Categorielist cats={cats}></Categorielist> */}
        <Groupobject></Groupobject>
        {}
      </>
    );
  }
}

export default Mainpage;
