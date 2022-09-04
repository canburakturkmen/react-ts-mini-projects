import { useState } from "react";
import classes from "./Container.module.css";

const Container = () => {
  const [options, setOptions] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const goodChangeHandler = () => {
    if (options.good) {
      setOptions((prev) => ({ ...prev, good: false }));
      return;
    }
    if (options.cheap && options.fast && !options.good)
      setOptions({ good: true, cheap: true, fast: false });
    setOptions((prev) => ({ ...prev, good: true }));
  };
  const cheapChangeHandler = () => {
    if (options.cheap) {
      setOptions((prev) => ({ ...prev, cheap: false }));
      return;
    }
    if (options.good && options.fast && !options.cheap)
      setOptions({ good: false, cheap: true, fast: true });
    setOptions((prev) => ({ ...prev, cheap: true }));
  };
  const fastChangeHandler = () => {
    if (options.fast) {
      setOptions((prev) => ({ ...prev, fast: false }));
      return;
    }
    if (options.good && options.cheap && !options.fast)
      setOptions({ good: false, cheap: true, fast: true });
    setOptions((prev) => ({ ...prev, fast: true }));
  };

  return (
    <div className={classes.container}>
      <h2>How do you want your project to be?</h2>
      <div className={classes["toggle-container"]}>
        <input
          id="good"
          type="checkbox"
          className={classes.toggle}
          checked={options.good}
          onChange={goodChangeHandler}
        />
        <label htmlFor="good" className={classes.label}>
          <div className={classes.ball}></div>
        </label>
        <span>Good</span>
      </div>
      <div className={classes["toggle-container"]}>
        <input
          type="checkbox"
          id="cheap"
          className={classes.toggle}
          checked={options.cheap}
          onChange={cheapChangeHandler}
        />
        <label className={classes.label} htmlFor="cheap">
          <div className={classes.ball}></div>
        </label>
        <span>Cheap</span>
      </div>
      <div className={classes["toggle-container"]}>
        <input
          type="checkbox"
          id="fast"
          className={classes.toggle}
          checked={options.fast}
          onChange={fastChangeHandler}
        />
        <label className={classes.label} htmlFor="fast">
          <div className={classes.ball}></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
};

export default Container;
