import { useState } from "react";
import Slide from "./Slide";
import classes from "./Slider.module.css";

const IMAGES = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

const setBackgroundImage = (url: string) => {
  document.body.style.backgroundImage = `url('${url}')`;
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftButtonClickHandler = () => {
    let idx = activeIndex;
    if (idx - 1 < 0) {
      idx = IMAGES.length - 1;
      setActiveIndex(idx);
    } else {
      idx = activeIndex - 1;
      setActiveIndex(idx);
    }

    setBackgroundImage(IMAGES[idx]);
  };

  const rightButtonClickHandler = () => {
    let idx = activeIndex;
    if (idx + 1 > IMAGES.length - 1) {
      idx = 0;
      setActiveIndex(idx);
    } else {
      idx = activeIndex + 1;
      setActiveIndex(idx);
    }

    setBackgroundImage(IMAGES[idx]);
  };

  return (
    <div className={classes.container}>
      {IMAGES.map((image, idx) => (
        <Slide
          key={idx}
          imageUrl={image}
          className={`${classes.slide} ${
            idx === activeIndex ? classes.active : ""
          }`}
        />
      ))}
      <button
        className={`${classes.arrow} ${classes["left-arrow"]}`}
        onClick={leftButtonClickHandler}
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <button
        className={`${classes.arrow} ${classes["right-arrow"]}`}
        onClick={rightButtonClickHandler}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Slider;
