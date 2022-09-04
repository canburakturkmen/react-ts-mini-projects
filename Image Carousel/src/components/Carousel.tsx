import { useEffect, useState } from "react";
import classes from "./Carousel.module.css";

const IMAGES = [
  "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
];

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      let activeIndex = imageIndex + 1;
      if (activeIndex === IMAGES.length) activeIndex = 0;
      setImageIndex(activeIndex);
    }, 2000);
    return () => {
      clearInterval(slideInterval);
    };
  });

  const prevClickHandler = () => {
    let newIndex = imageIndex - 1;
    if (newIndex < 0) newIndex = IMAGES.length - 1;
    setImageIndex(newIndex);
  };

  const nextClickHandler = () => {
    let newIndex = imageIndex + 1;
    if (newIndex > IMAGES.length - 1) newIndex = 0;
    setImageIndex(newIndex);
  };

  return (
    <div className={classes.carousel}>
      <div
        style={{ transform: `translateX(${-100 * imageIndex}%)` }}
        className={classes["image-container"]}
      >
        {IMAGES.map((url, idx) => (
          <img key={idx} src={url} alt="random" />
        ))}
      </div>
      <div className={classes["buttons-container"]}>
        <button className={classes.btn} onClick={prevClickHandler}>
          Prev
        </button>
        <button className={classes.btn} onClick={nextClickHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
