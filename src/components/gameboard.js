import React, { useState } from "react";
import uniqid from "uniqid";
import Scoreboard from "./scoreboard";

function Gameboard(props) {
  const [clickedImages, setclickedImages] = useState([]);
  const [images, setImages] = useState(buildImgs(props.imgs));
  let [score, setScore] = useState(0);

  function shuffleImgs(imageArray) {
    const copiedImages = [...imageArray];
    const shuffledImages = [];
    for (let i = 0; i < imageArray.length; i++) {
      const randomNum = Math.floor(Math.random() * copiedImages.length);
      shuffledImages.push(copiedImages.splice(randomNum, 1)[0]);
    }
    return shuffledImages;
  }

  function buildImgs(pics) {
    let images = [];
    pics.forEach((image) => {
      const randomID = uniqid();
      images.push(
        <img
          src={image}
          key={randomID}
          onClick={() => handleClick(randomID)}
        ></img>
      );
    });

    return images;
  }

  function renderImgs(imgArray) {
    const images = shuffleImgs(imgArray);
    const renderImgs = (
      <div>
        <ul>{images.concat()}</ul>
      </div>
    );
    return renderImgs;
  }

  function handleClick(num) {
    if (clickedImages.includes(num)) {
      setScore(0);
      console.log("you lose");
      return;
    }
    setScore((score = score + 1));
    setclickedImages(clickedImages.push(num));
  }

  return (
    <div>
      <Scoreboard theScore={score} />
      {renderImgs(images)}
    </div>
  );
}

export default Gameboard;
