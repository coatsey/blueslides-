import React, { useState } from "react";
import "./Gallery.css";
import CloseIcon from "@material-ui/icons/Close";

import Img1 from "../images/fish1.jpg";
import Img2 from "../images/fish2.jpg";
import Img3 from "../images/fish3.jpg";
import Img4 from "../images/fish4.jpg";
import Img5 from "../images/fish5.jpg";
import Img6 from "../images/fish6.jpg";
import Img7 from "../images/fish7.jpg";
import Img8 from "../images/fish8.jpg";
import Img9 from "../images/fish9.jpg";

const FishGall = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FishGall;
