import React, { useState } from "react";

function ColorMagico() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const changeBackgroundColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <p>Color actual: {backgroundColor}</p>
      <button onClick={changeBackgroundColor}>Cambiar Color</button>
    </div>
  );
}

export default ColorMagico;
