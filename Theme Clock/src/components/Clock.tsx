import { useEffect, useState } from "react";
import classes from "./Clock.module.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Clock = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const hour =
    dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours();
  const minute =
    dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes();
  const second = dateTime.getSeconds();

  const time = `${hour}:${minute}`;
  const date = `${days[dateTime.getDay()]}, ${months[dateTime.getMonth()]} `;
  const day =
    dateTime.getDate() < 10 ? `*${dateTime.getDate()}` : dateTime.getDate();

  useEffect(() => {
    const dateTimeInterval = setInterval(() => {
      setDateTime((prev) => new Date());
    }, 500);
    return () => {
      clearInterval(dateTimeInterval);
    };
  }, []);

  const buttonClickHandler = () => {
    const html = document.querySelector("html");
    if (isDarkMode) {
      html?.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      html?.classList.add("dark");
      setIsDarkMode(true);
    }
  };
  return (
    <>
      <button className={classes.toggle} onClick={buttonClickHandler}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className={classes.container}>
        <div className={classes.clock}>
          <div
            className={`${classes.needle} ${classes.hour}`}
            style={{
              transform: `translate(-50%, -100%) rotate(${
                30 * dateTime.getHours()
              }deg)`,
            }}
          ></div>
          <div
            className={`${classes.needle} ${classes.minute}`}
            style={{
              transform: `translate(-50%, -100%) rotate(${
                6 * dateTime.getMinutes()
              }deg)`,
            }}
          ></div>
          <div
            className={`${classes.needle} ${classes.second}`}
            style={{
              transform: `translate(-50%, -100%) rotate(${6 * second}deg)`,
            }}
          ></div>
          <div className={classes["center-point"]}></div>
        </div>
        <div className={classes.time}>{time}</div>
        <div className={classes.date}>
          {date}
          <span className={classes.circle}>{day}</span>
        </div>
      </div>
    </>
  );
};

export default Clock;
