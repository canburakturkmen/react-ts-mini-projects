import { useEffect, useState } from "react";
import classes from "./Countdown.module.css";

const Countdown = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter === 0) return;

    const counterInterval = setInterval(() => {
      setCounter((prev) => (prev -= 1));
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, [counter]);

  return (
    <>
      <div className={`${classes.counter} ${counter === 0 && classes.hide}`}>
        <div className={`${classes.nums}`}>
          <span className={`${counter === 0 ? classes.stop : classes.num}`}>
            {counter}
          </span>
        </div>
        <h4>Get Ready!</h4>
      </div>

      <div className={`${classes.final} ${counter === 0 && classes.show}`}>
        <h1>GO!!!!!</h1>
        <button onClick={() => {setCounter(3)}}>Replay</button>
      </div>
    </>
  );
};

export default Countdown;
