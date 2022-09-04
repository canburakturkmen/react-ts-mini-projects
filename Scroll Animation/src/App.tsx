import { useEffect, useRef, useState } from "react";
import classes from "./components/Content.module.css";

const CONTENT_LIST = Array.from(Array(30).keys());

//Using ref to add class. Might not be the best approach for react.
function App() {
  const [contentList, setContentList] = useState(CONTENT_LIST);
  const contentRef = useRef<HTMLDivElement[]>([]);

  const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    contentRef.current?.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add(classes.show);
      } else {
        box.classList.remove(classes.show);
      }
    });
  };

  useEffect(() => {
    checkBoxes();
    window.addEventListener("scroll", (e) => {
      checkBoxes();
    });

    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  return (
    <>
      <h1 style={{ margin: "50px 0" }}>Scroll to see the animation</h1>
      {contentList.map((val) => (
        <div
          ref={(r) => {
            if (r !== null) contentRef.current?.push(r);
          }}
          key={val}
          className={classes.content}
        >
          Content
        </div>
      ))}
    </>
  );
}

export default App;
