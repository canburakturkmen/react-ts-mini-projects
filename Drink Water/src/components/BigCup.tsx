import { useState } from "react";
import classes from "./BigCup.module.css";

type props = {
  remained: number;
  percentage: number;
};

//Todo: improvement handle cup clicks by 1 to nth cup
const BigCup: React.FC<props> = (props) => {
  const height = `${props.percentage}%`;
  const heightRemained = props.remained !== 0 ? "auto" : "0";

  return (
    <div className={"cup"}>
      <div className={`${classes.remained}`} style={{ height: heightRemained }}>
        <span>{props.remained + "L"}</span>
        <small>Remained</small>
      </div>
      <div className={classes.percentage} style={{ height: height }}>
        {props.percentage > 0 ? props.percentage + "%" : ""}
      </div>
    </div>
  );
};

export default BigCup;
