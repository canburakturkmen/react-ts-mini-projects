import { useState } from "react";
import classes from "./ProgressSteps.module.css";
const ProgressStep = () => {
  const [step, setStep] = useState(1);

  const barWidth = `${(step - 1 ) * 30}%`;

  const nextClickHandler = () => {
    if (step >= 4) {
      setStep(4);
      return;
    }

    setStep((prev) => prev + 1);
  };

  const prevClickHandler = () => {
    if (step <= 1) {
      setStep(1);
      return;
    }

    setStep((prev) => prev - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes["progress-container"]}>
        <div className={classes.progress} style={{width: barWidth}}></div>
        <div className={`${classes.circle} ${step >= 1 ? classes.active : ""}`}>
          1
        </div>
        <div className={`${classes.circle} ${step >= 2 ? classes.active : ""}`}>
          2
        </div>
        <div className={`${classes.circle} ${step >= 3 ? classes.active : ""}`}>
          3
        </div>
        <div
          className={`${classes.circle} ${step === 4 ? classes.active : ""}`}
        >
          4
        </div>
      </div>

      <button
        className={classes.btn}
        id="prev"
        disabled={step > 1 ? false : true}
        onClick={prevClickHandler}
      >
        Prev
      </button>
      <button
        className={classes.btn}
        id="next"
        disabled={step !== 4 ? false : true}
        onClick={nextClickHandler}
      >
        Next
      </button>
    </div>
  );
};

export default ProgressStep;
