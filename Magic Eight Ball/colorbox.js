import React from "react";
import "./colorbox.css";

function ColorBox({ color, isChanged }) {
  return (
    <div className="ColorBox" style={{ backgroundColor: color }}>
      {isChanged && <span className="changed-text">Changed!</span>}
    </div>
  );
}

export default ColorBox;
