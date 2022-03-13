import React, { Component } from "react";
import Categorielist from "./categorielist/categorielist";
import Groupobject from "./groupobject/groupobject";

class Mainpage extends Component {
  render() {
    let cats = this.props.cats;
    return (
      <div className="mainboard">
        {/*import Banners from "../banners/banners";
            <Banners></Banners>*/}
        <Categorielist cats={cats}></Categorielist>
        <Groupobject></Groupobject>
      </div>
    );
  }
}

export default Mainpage;
