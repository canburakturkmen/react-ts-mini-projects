import { useState } from "react";
import classes from "./SearchWidget.module.css";

const SearchWidget = () => {
  const [widgetActive, setWidgetActive] = useState(false);

  return (
    <div className={`${classes.search} ${widgetActive ? classes.active : ""}`}>
      <input className={classes.input} type="text" placeholder="Search..." />
      <button
        className={classes.btn}
        onClick={() => setWidgetActive((prev) => !prev)}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchWidget;
