import { useState } from "react";
import classes from "./Landing.module.css";

const Landing = () => {
  const [activeClass, setActiveClass] = useState("");

  return (
    <div className={`${classes.container} ${classes[activeClass]}`}>
      <div
        className={`${classes.split} ${classes.left}`}
        onMouseEnter={() => {
          setActiveClass("hover-left");
        }}
      >
        <h1>Playtation 5</h1>
        <a href="#" className={classes.btn}>
          Buy Now
        </a>
      </div>
      <div
        className={`${classes.split} ${classes.right}`}
        onMouseEnter={() => {
          setActiveClass("hover-right");
        }}
      >
        <h1>XBox Series X</h1>
        <a href="#" className={classes.btn}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Landing;
