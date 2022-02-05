import React, { Component } from "react";
import Categorielist from "./categorielist/categorielist";
import Groupobject from "./groupobject/groupobject";

class Mainpage extends Component {
  render() {
    return (
      <div className="mainboard">
        {/*import Banners from "../banners/banners";
            <Banners></Banners>*/}
        <Categorielist></Categorielist>
        <Groupobject></Groupobject>
      </div>
    );
  }
}

export default Mainpage;
