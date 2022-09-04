import { useState } from "react";
import classes from "./Boxes.module.css";

const createBoxes = () => {
  let boxArr: React.ReactNode[] = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      boxArr.push(
        <div
          key={i + j}
          style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
          className={classes.box}
        />
      );
    }
  }
  return boxArr;
};

const Boxes = () => {
  const [isBig, setIsBig] = useState(false);

  return (
    <div>
      <button
        className={classes.magic}
        onClick={() => {
          setIsBig((prev) => !prev);
        }}
      >
        Magic 🎩
      </button>
      <div className={`${classes.boxes} ${isBig && classes.big}`}>
        {createBoxes()}
      </div>
    </div>
  );
};

export default Boxes;
