import React from "react";

function Scoreboard(props) {
  const { theScore } = props;

  return (
    <div>
      <h3>Current Score: {theScore}</h3>
    </div>
  );
}

export default Scoreboard;
