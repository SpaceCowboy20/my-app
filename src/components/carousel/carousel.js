import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Banner1 from "../../banners/banner1.jpg";
import Banner2 from "../../banners/banner2.png";
import Banner3 from "../../banners/banner3.png";
import Banner4 from "../../banners/banner4.png";
import Banner5 from "../../banners/banner5.png";

const App = () => {
  const images = [
    { src: Banner1 },
    { src: Banner2 },
    { src: Banner3 },
    { src: Banner4 },
    { src: Banner5 },
  ];

  // let children = return {'<div> <img src={Banner1}/></div>'}

  return (
    <Carousel
      images={images}
      // children={images}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      widgetsHasShadow={true}
      hasIndexBoard={false}
      hasDotButtons={"bottom"}
      hasSizeButton={false}
      hasMediaButton={false}
      hasThumbnails={false}
      style={{ height: "30rem", width: "30rem" }}
    />
  );
};

export default App;
