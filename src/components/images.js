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
  // destructure
  const { clickHandler } = props;

  // shuffles images after only the first render
  useEffect(() => {
    setImages((images = shuffleImgs(images)));
  }, []);

  // all the moon images... thinking about passing this from gameboard as props
  let [images, setImages] = useState([
    { img: firstQuarter, key: uniqid(), alt: "first quarter" },
    { img: fullMoon, key: uniqid(), alt: "full moon" },
    { img: newMoon, key: uniqid(), alt: "new moon" },
    { img: thirdQuarter, key: uniqid(), alt: "third quarter" },
    { img: waningCrescent, key: uniqid(), alt: "waning crescent" },
    { img: waningGibbous, key: uniqid(), alt: "waning gibbous" },
    { img: waxingCrescent, key: uniqid(), alt: "waxing crescent" },
    { img: waxingGibbous, key: uniqid(), alt: "waxing gibbous" },
  ]);

  // shuffle function 'borrowed' from me and Chartleys cardgame
  function shuffleImgs(imageArray) {
    const copiedImages = [...imageArray];
    const shuffledImages = [];
    for (let i = 0; i < imageArray.length; i++) {
      const randomNum = Math.floor(Math.random() * copiedImages.length);
      shuffledImages.push(copiedImages.splice(randomNum, 1)[0]);
    }

    return shuffledImages;
  }

  // map function to display all the BaseImages
  const displayImages = images.map((obj) => {
    return (
      <BaseImage
        key={obj.key}
        src={obj.img}
        itemKey={obj.key}
        onClick={() => {
          clickHandler(obj.key);
          setImages(shuffleImgs(images));
        }}
        alt={obj.alt}
      />
    );
  });

  // the JSX to return
  return <div>{displayImages}</div>;
}

export default Images;
