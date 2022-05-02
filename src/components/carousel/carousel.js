import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const App = () => {
  const images = [
    {
      src: "https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg",
    },
    {
      src: "https://www.comicnity.com/wp-content/uploads/2021/05/Hisoka-Morrow.jpg?ezimgfmt=ng%3Awebp%2Fngcb6%2Frs%3Adevice%2Frscb6-2",
    },
    { src: "https://i.ibb.co/KDdD5QC/vihqjj26.png" },
    { src: "https://animehunch.com/wp-content/uploads/2021/06/Eren-AOT.jpg" },
  ];

  return (
    <Carousel
      images={images}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      widgetsHasShadow={true}
      hasIndexBoard={false}
      hasDotButtons={"bottom"}
      hasSizeButton={false}
      hasMediaButton={false}
      hasThumbnails={false}
      style={{ height: "30rem", width: "45rem" }}
    />
  );
};

export default App;
