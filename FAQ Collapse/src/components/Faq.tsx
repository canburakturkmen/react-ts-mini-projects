import { useState } from "react";
import classes from "./Faq.module.css";

type props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};
const Faq: React.FC<props> = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${classes.container} ${isActive ? classes.active : ""}`}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        {!isActive && <i className="fas fa-chevron-down"></i>}
        {isActive && <i className="fas fa-times"></i>}
      </button>
    </div>
  );
};

export default Faq;
