import React from "react";

function BaseImage(props) {
  const { src, onClick, alt } = props;
  return <img src={src} onClick={onClick} alt={alt}></img>;
}

export default BaseImage;
