import React, { useState, useEffect } from "react";
import firstQuarter from "../images/firstQuarter.png";
import fullMoon from "../images/fullMoon.png";
import newMoon from "../images/newMoon.png";
import thirdQuarter from "../images/thirdQuarter.png";
import waningCrescent from "../images/waningCrescent.png";
import waningGibbous from "../images/waningGibbous.png";
import waxingCrescent from "../images/waxingCrescent.png";
import waxingGibbous from "../images/waxingGibbous.png";
import BaseImage from "./baseImage";
import uniqid from "uniqid";

function Images(props) {
  useEffect(() => {
    setImages((images = shuffleImgs(images)));
  }, []);
  let [images, setImages] = useState([
    { img: firstQuarter, key: uniqid() },
    { img: fullMoon, key: uniqid() },
    { img: newMoon, key: uniqid() },
    { img: thirdQuarter, key: uniqid() },
    { img: waningCrescent, key: uniqid() },
    { img: waningGibbous, key: uniqid() },
    { img: waxingCrescent, key: uniqid() },
    { img: waxingGibbous, key: uniqid() },
  ]);

  function shuffleImgs(imageArray) {
    const copiedImages = [...imageArray];
    const shuffledImages = [];
    for (let i = 0; i < imageArray.length; i++) {
      const randomNum = Math.floor(Math.random() * copiedImages.length);
      shuffledImages.push(copiedImages.splice(randomNum, 1)[0]);
    }

    return shuffledImages;
  }

  return (
    <div>
      <BaseImage
        src={images[0].img}
        onClick={() => {
          console.log("clicked");
          props.clickHandler(images[0].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[1].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[1].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[2].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[2].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[3].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[3].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[4].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[4].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[5].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[5].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[6].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[6].key);
          setImages(shuffleImgs(images));
        }}
      />
      <BaseImage
        src={images[7].img}
        onClick={() => {
          console.log("clicked");

          props.clickHandler(images[7].key);
          setImages(shuffleImgs(images));
        }}
      />
    </div>
  );
}

export default Images;
