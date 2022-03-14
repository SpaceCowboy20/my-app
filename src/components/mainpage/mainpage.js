import React, { Component } from "react";
import Categorielist from "./categorielist/categorielist";
import Groupobject from "./groupobject/groupobject";
import Carousell from "../carousel/carousel";

class Mainpage extends Component {
  render() {
    let cats = this.props.cats;
    /*     const images = [
      {
        src: "https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg",
      },
      {
        src: "https://www.comicnity.com/wp-content/uploads/2021/05/Hisoka-Morrow.jpg?ezimgfmt=ng%3Awebp%2Fngcb6%2Frs%3Adevice%2Frscb6-2",
      },
      { src: "https://i.ibb.co/KDdD5QC/vihqjj26.png" },
      { src: "https://animehunch.com/wp-content/uploads/2021/06/Eren-AOT.jpg" },
    ]; */
    return (
      <div className="mainboard">
        <div className="board">
          <Carousell />
        </div>
        <Categorielist cats={cats}></Categorielist>
        <Groupobject></Groupobject>
      </div>
    );
  }
}

export default Mainpage;
