import { useState } from "react";

const DEFAULT_COLOR = "#1D1D1D";

const colorVals = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const generateRandColor = () => {
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += colorVals[Math.floor(Math.random() * colorVals.length)];
  }
  return color;
};

const Square = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);

  const mouseEnterHandler = () => {
    setColor(generateRandColor());
  };
  const mouseExitHandler = () => {
    setColor(DEFAULT_COLOR);
  };
  return (
    <div
      style={{ backgroundColor: color }}
      className="square"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseExitHandler}
    ></div>
  );
};

export default Square;
