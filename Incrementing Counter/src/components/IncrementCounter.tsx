import { useEffect, useState } from "react";
import classes from "./IncrementCounter.module.css";

type props = {
  iconClass: string;
  counter: number;
  text: string;
  children?: React.ReactNode;
};

const IncrementCounter: React.FC<props> = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = props.counter;
    const incrementTick = target / 200;

    let tempCount = 0;
    const counterInterval = setInterval(() => {
      if (tempCount >= target) clearInterval(counterInterval);

      tempCount = Math.floor(tempCount + incrementTick);
      if (tempCount >= target) setCount(target);
      else {
        setCount((prev) => Math.floor((prev += incrementTick)));
      }
    }, 1);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);
  return (
    <div className={classes.container}>
      <i className={props.iconClass}></i>
      <div className={classes.counter}>{count}</div>
      <span>{props.text}</span>
    </div>
  );
};

export default IncrementCounter;
