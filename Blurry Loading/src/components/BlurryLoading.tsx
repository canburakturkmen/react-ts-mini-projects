import { useEffect, useState } from "react";
import classes from "./BlurryLoading.module.css";

const BlurryLoading = () => {
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    let count = 0;
    const blurInterval = setInterval(() => {
      if (count > 99) {
        clearInterval(blurInterval);
      }
      setBlurValue(count);
      count++;
    }, 30);
  }, []);
  return (
    <section className={classes.section}>
      <div
        style={{ filter: `blur(${30 - (blurValue * 30) / 100}px)` }}
        className={classes.bg}
      ></div>
      <div
        style={{ opacity: 1 - blurValue / 100 }}
        className={classes["loading-text"]}
      >{`${blurValue}%`}</div>
    </section>
  );
};

export default BlurryLoading;
