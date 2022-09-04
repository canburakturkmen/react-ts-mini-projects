import { createRef, useState } from "react";
import SlideLeft from "./SlideLeft";
import classes from "./Slider.module.css";
import SlideRight from "./SlideRight";

const LEFT_LIST = [
  { backgroundColor: "#FD3555", title: "Nature flower", text: "all in pink" },
  {
    backgroundColor: "#2A86BA",
    title: "Blue sky",
    text: "with it's mountains",
  },
  {
    backgroundColor: "#252E33",
    title: "Lonely castle",
    text: "in the wilderness",
  },
  { backgroundColor: "#FFB866", title: "Flying eagle", text: "in the sunset" },
];

const RIGHT_LIST = [
  `url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')`,
  `url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')`,
  `url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')`,
  `url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')`,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideRightTranslateY, setSlideRightTranslateY] = useState(0);
  const sliderRef = createRef<HTMLDivElement>();

  const leftSlideTop = `-${(LEFT_LIST.length - 1) * 100}vh`;

  const upButtonClickHandler = () => {
    const sliderCurrent = sliderRef.current;
    if (!sliderCurrent) return;
    const sliderHeight = sliderCurrent.clientHeight;
    let tempIdx = activeIndex + 1;
    if (tempIdx > LEFT_LIST.length - 1) tempIdx = 0;
    setActiveIndex(tempIdx);
    setSlideRightTranslateY(-(tempIdx * sliderHeight));
  };

  const downButtonClickHandler = () => {
    const sliderCurrent = sliderRef.current;
    if (!sliderCurrent) return;
    const sliderHeight = sliderCurrent.clientHeight;
    let tempIdx = activeIndex - 1;
    if (tempIdx < 0) tempIdx = LEFT_LIST.length - 1;
    setActiveIndex(tempIdx);
    setSlideRightTranslateY(-(tempIdx * sliderHeight));
  };

  return (
    <div className={classes.container} ref={sliderRef}>
      <div
        style={{
          top: leftSlideTop,
          transform: `translateY(${-slideRightTranslateY}px)`,
        }}
        className={classes["left-slide"]}
      >
        {LEFT_LIST.map((el, index) => (
          <SlideLeft key={index} {...el} />
        ))}
      </div>
      <div
        style={{ transform: `translateY(${slideRightTranslateY}px)` }}
        className={classes["right-slide"]}
      >
        {RIGHT_LIST.map((url, index) => (
          <SlideRight key={index} imageUrl={url} />
        ))}
      </div>
      <div className={classes["action-buttons"]}>
        <button
          className={classes["down-button"]}
          onClick={downButtonClickHandler}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className={classes["up-button"]} onClick={upButtonClickHandler}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
