import React, { useState } from "react";
import Images from "./images";
import Scoreboard from "./scoreboard";

function Gameboard(props) {
  const [clickedImages, setclickedImages] = useState([]);
  let [score, setScore] = useState(0);

  function handleClick(num) {
    if (clickedImages.includes(num)) {
      const looplength = clickedImages.length;
      setScore(0);
      console.log("you lose");
      setclickedImages([]);
      console.log(clickedImages);

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
