// EightBall.js
import React, { useState } from "react";
import "./eightBall.css"; // Import styling for the eight ball

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [count, setCount] = useState({ green: 0, goldenrod: 0, red: 0 });

  function handleClick() {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
    
    // Increment color count based on the selected answer
    setCount((prevCount) => ({
      ...prevCount,
      [randomAnswer.color]: prevCount[randomAnswer.color] + 1,
    }));
  }

  function reset() {
    setMsg("Think of a Question");
    setColor("black");
  }

  return (
    <div>
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
        <p>{msg}</p>
      </div>
      <button onClick={reset}>Reset</button>
      <div className="color-counts">
        <p>Green: {count.green}</p>
        <p>Goldenrod: {count.goldenrod}</p>
        <p>Red: {count.red}</p>
      </div>
    </div>
  );
}

export default EightBall;

