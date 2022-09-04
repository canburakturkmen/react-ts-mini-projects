import { useEffect, useRef } from "react";
import classes from "./Quiz.module.css";

type props = {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  selectedOption: string | null;
  selectedOptionHandler: (option: string) => void;
};

const Question = (props: props) => {
  const inputRef = useRef<any[]>([]);

  //Maybe better approach to reset selected option?
  useEffect(() => {
    if (props.selectedOption === null) {
      inputRef.current[0].checked = false;
      inputRef.current[1].checked = false;
      inputRef.current[2].checked = false;
      inputRef.current[3].checked = false;
    }
  });

  return (
    <div className={classes.question}>
      <h2>{props.question}</h2>
      <ul>
        <li>
          <input
            ref={(r) => {
              inputRef.current.push(r);
            }}
            className={classes.answer}
            type="radio"
            name="answer"
            id="a"
            onChange={(e) => {
              props.selectedOptionHandler("a");
            }}
          />
          <label htmlFor="a">{props.a}</label>
        </li>
        <li>
          <input
            ref={(r) => {
              inputRef.current.push(r);
            }}
            className={classes.answer}
            type="radio"
            name="answer"
            id="b"
            onChange={(e) => {
              props.selectedOptionHandler("b");
            }}
          />
          <label htmlFor="b">{props.b}</label>
        </li>
        <li>
          <input
            ref={(r) => {
              inputRef.current.push(r);
            }}
            className={classes.answer}
            type="radio"
            name="answer"
            id="c"
            onChange={(e) => {
              props.selectedOptionHandler("c");
            }}
          />
          <label htmlFor="c">{props.c}</label>
        </li>
        <li>
          <input
            ref={(r) => {
              inputRef.current.push(r);
            }}
            className={classes.answer}
            type="radio"
            name="answer"
            id="d"
            onChange={(e) => {
              props.selectedOptionHandler("d");
            }}
          />
          <label htmlFor="d">{props.d}</label>
        </li>
      </ul>
    </div>
  );
};
export default Question;
