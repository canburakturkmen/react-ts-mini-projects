import SmallCup from "./SmallCup";
import classes from "./SmallCups.module.css";

type props = {
  cupClickHandler: () => void;
};

const CUP_LIST = Array.from(Array(8).keys());

const SmallCups = (props: props) => {
  return (
    <div className={classes.cups}>
      {CUP_LIST.map((el) => (
        <SmallCup key={el} cupClickHandler={props.cupClickHandler} />
      ))}
    </div>
  );
};

export default SmallCups;
