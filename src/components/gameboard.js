import React, { useState } from "react";
import Images from "./images";
import Scoreboard from "./scoreboard";

function Gameboard() {
  const [clickedImages, setclickedImages] = useState([]);
  let [score, setScore] = useState(0);

  function handleClick(num) {
    if (clickedImages.includes(num)) {
      setScore(0);
      setclickedImages([]);
      return;
    }
    setScore(score + 1);
    setclickedImages([...clickedImages, num]);
  }

  return (
    <div>
      <Scoreboard theScore={score} />
      <Images clickHandler={handleClick} />
    </div>
  );
}

export default Gameboard;
