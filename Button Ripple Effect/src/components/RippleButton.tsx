import React, { useEffect, useState } from "react";
import classes from "./RippleButton.module.css";

const RippleButton = () => {
  const [animate, setAnimate] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const btnClickHandler = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    const rect = e.currentTarget.getBoundingClientRect();

    const xInside = x - rect.left;
    const yInside = y - rect.top;
    setCoords({ x: xInside, y: yInside });
    setAnimate(true);
  };

  useEffect(() => {
    if (!animate) return;
    const animationTimeout = setTimeout(() => {
      setAnimate(false);
      return () => {
        clearTimeout(animationTimeout);
      };
    }, 500);
  }, [animate]);

  return (
    <button
      onClick={(e) => {
        btnClickHandler(e);
      }}
    >
      <span
        style={{ top: `${coords.y}px`, left: `${coords.x}px` }}
        className={`${animate ? classes.circle : ""}`}
      ></span>
      Click Me
    </button>
  );
};

export default RippleButton;
