import { useState } from "react";
import classes from "./SmallCup.module.css";

type props = {
  cupClickHandler: () => void;
};
const SmallCup = (props: props) => {
  const [isFull, setIsFull] = useState(false);

  const handleCupClick = () => {
    if (isFull) return;
    setIsFull(true);
    props.cupClickHandler();
  };
  return (
    <div
      className={`${"cup"} ${classes["cup-small"]} ${
        isFull ? classes.full : ""
      }`}
      onClick={handleCupClick}
    >
      250 ml
    </div>
  );
};

export default SmallCup;
