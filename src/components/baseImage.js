import React from "react";

function BaseImage(props) {
  // destructure props
  const { src, onClick, alt } = props;

  // the JSX to return
  return <img src={src} onClick={onClick} alt={alt}></img>;
}

export default BaseImage;
