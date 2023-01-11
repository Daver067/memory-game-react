import React from "react";

function BaseImage(props) {
  return <img src={props.src} key={props.src} onClick={props.onClick}></img>;
}

export default BaseImage;
