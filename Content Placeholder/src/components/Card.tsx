import { useEffect, useState } from "react";
import classes from "./Card.module.css";

type cardData = {
  headerImgUrl?: string;
  titleTxt?: string;
  excerptTxt?: string;
  profileImgUrl?: string;
  userName?: string;
  date?: string;
  isFetched: boolean;
};

const STATIC_DATA: cardData = {
  headerImgUrl:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  titleTxt: "Lorem ipsum dolor sit amet.",
  excerptTxt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit!",
  profileImgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  userName: "John Doe",
  date: "Jul 17, 2022",
  isFetched: true,
};

const Card = () => {
  const [data, setData] = useState<cardData>({ isFetched: false });

  const animatedBgClass = data.isFetched ? "" : classes["animated-bg"];
  const animatedTxtClass = data.isFetched ? "" : classes["animated-bg-text"];

  //Simulating fetching data...
  useEffect(() => {
    const dataTimeout = setTimeout(() => {
      setData(STATIC_DATA);
    }, Math.floor(Math.random() * 3) * 1000);
    return () => {
      clearTimeout(dataTimeout);
    };
  }, []);

  return (
    <div className={classes.card}>
      <div className={`${classes["card-header"]} ${animatedBgClass}`}>
        {data.headerImgUrl && <img src={data.headerImgUrl} alt="" />}
      </div>
      <div className={classes["card-content"]}>
        <h3
          className={`${classes["card-title"]} ${animatedBgClass} ${animatedTxtClass}`}
        >
          {data.titleTxt && data.titleTxt}
        </h3>
        <p className={classes["card-excerpt"]}>
          {data.excerptTxt && data.excerptTxt}
          <span className={`${animatedBgClass} ${animatedTxtClass}`}>
            &nbsp;
          </span>
          <span className={`${animatedBgClass} ${animatedTxtClass}`}>
            &nbsp;
          </span>
          <span className={`${animatedBgClass} ${animatedTxtClass}`}>
            &nbsp;
          </span>
        </p>
        <div className={`${classes.author}`}>
          <div className={`${classes["profile-img"]} ${animatedBgClass}`}>
            {data.profileImgUrl && <img src={data.profileImgUrl} alt="" />}
          </div>
          <div className={classes["author-info"]}>
            <strong className={`${animatedBgClass} ${animatedTxtClass}`}>
              {data.userName}
            </strong>
            <small className={`${animatedBgClass} ${animatedTxtClass}`}>
              {data.date}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
