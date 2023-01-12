import React, { useState } from "react";
import Images from "./images";
import Scoreboard from "./scoreboard";

function Gameboard() {
  // array of images uniqid codes that have been clicked, begin with empty
  const [clickedImages, setclickedImages] = useState([]);

  // the current score of the matches, start at 0
  let [score, setScore] = useState(0);

  // handler that checks if the pic has been clicked already
  // resets score to 0 and clicked images to empty array for a loss
  // adds 1 point to score and adds the ID to the clickedImages array
  function handleClick(uniqID) {
    if (clickedImages.includes(uniqID)) {
      setScore(0);
      setclickedImages([]);
      return;
    }
    setScore(score + 1);
    setclickedImages([...clickedImages, uniqID]);
  }

  // The JSX to return for the app
  return (
    <div>
      <Scoreboard theScore={score} />
      <Images clickHandler={handleClick} />
    </div>
  );
}

export default Gameboard;
