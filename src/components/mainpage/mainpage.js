import React, { Component } from "react";
// import Categorielist from "./categorielist/categorielist";
import Groupobject from "./groupobject/groupobject";
import Carousell from "../carousel/carousel";

class Mainpage extends Component {
  render() {
    // let cats = this.props.cats;
    return (
      <>
        {
          <div className="board">
            <Carousell />
          </div>
        }
        {/* <Categorielist cats={cats}></Categorielist> */}
        <Groupobject></Groupobject>
        {}
      </>
    );
  }
}

export default Mainpage;
