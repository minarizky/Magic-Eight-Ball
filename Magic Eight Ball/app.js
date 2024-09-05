import React, { useState } from "react";
import ColorBox from "./colorbox";
import "./app.css";

function App({ colors, numBoxes }) {
  // Create an array of random colors for the initial state
  const initialColors = Array.from({ length: numBoxes }, () => colors[Math.floor(Math.random() * colors.length)]);

  const [boxes, setBoxes] = useState(initialColors);
  const [lastChanged, setLastChanged] = useState(null);

  // Function to change the color of a random box
  const changeRandomBoxColor = () => {
    const randomIndex = Math.floor(Math.random() * boxes.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create a new array with the updated color for the selected box
    const newBoxes = boxes.map((boxColor, idx) =>
      idx === randomIndex ? randomColor : boxColor
    );
    
    setBoxes(newBoxes);
    setLastChanged(randomIndex); // Track the last changed box
  };

  return (
    <div className="App">
      <div className="box-container">
        {boxes.map((color, idx) => (
          <ColorBox key={idx} color={color} isChanged={idx === lastChanged} />
        ))}
      </div>
      <button onClick={changeRandomBoxColor}>Change</button>
    </div>
  );
}

// Default props for colors and number of boxes
App.defaultProps = {
  colors: ["red", "green", "blue", "purple", "orange", "yellow", "pink", "brown"],
  numBoxes: 16
};

export default App;

