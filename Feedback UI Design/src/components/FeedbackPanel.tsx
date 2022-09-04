import { useState } from "react";
import classes from "./FeedbackPanel.module.css";

const FeedbackPanel = () => {
  const [activeOption, setActiveOption] = useState(2);
  const [showResult, setShowResult] = useState(false);

  const feedback =
    activeOption === 0
      ? "Unhappy"
      : activeOption === 1
      ? "Neutral"
      : "Satisfied";

  return (
    <div className={classes["panel-container"]}>
      {!showResult && (
        <>
          <strong>
            How satisfied are you with our <br /> customer support?{" "}
          </strong>
          <div className={classes["ratings-container"]}>
            <div
              className={`${classes.rating} ${
                activeOption === 0 ? classes.active : ""
              }`}
            >
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
                alt=""
                onClick={() => {
                  setActiveOption(0);
                }}
              />
              <small>Unhappy</small>
            </div>
            <div
              className={`${classes.rating} ${
                activeOption === 1 ? classes.active : ""
              }`}
            >
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
                alt=""
                onClick={() => {
                  setActiveOption(1);
                }}
              />
              <small>Neutral</small>
            </div>
            <div
              className={`${classes.rating} ${
                activeOption === 2 ? classes.active : ""
              }`}
            >
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
                alt=""
                onClick={() => {
                  setActiveOption(2);
                }}
              />
              <small>Satisfied</small>
            </div>
          </div>
          <button
            className={classes.btn}
            onClick={() => {
              setShowResult(true);
            }}
          >
            Send Review
          </button>
        </>
      )}

      {showResult && (
        <>
          <i className={`fas fa-heart ${classes.heart}`}></i>
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: {feedback}</strong>
          <p>We'll use your feedback to improve our customer support</p>
        </>
      )}
    </div>
  );
};

export default FeedbackPanel;
