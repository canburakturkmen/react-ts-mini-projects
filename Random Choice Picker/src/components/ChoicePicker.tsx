import React, { createRef, useEffect, useState } from "react";
import Choice from "./Choice";
import classes from "./ChoicePicker.module.css";

type tag = {
  isHighlighted: boolean;
  text: string;
};

const SELECTION_DELAY = 100;

const ChoicePicker = () => {
  const [choiceList, setChoiceList] = useState<tag[]>([] as tag[]);

  //Todo: how to reset textArea and list after selection completed?
  //Todo: reset placeholder and cursor on first line.
  const [selectionDelay, setSelectionDelay] = useState(0);
  const [selectionTime, setSelectionTime] = useState(0);

  const textAreaRef = createRef<HTMLTextAreaElement>();

  useEffect(() => {
    if (selectionDelay === 0) return;

    const selectionInterval = setInterval(() => {
      const randIndex = Math.floor(Math.random() * choiceList.length);
      setChoiceList((prev) => {
        let tempList = [...prev];
        tempList.forEach((choice, index) => {
          index === randIndex
            ? (choice.isHighlighted = true)
            : (choice.isHighlighted = false);
          return choice;
        });
        return tempList;
      });
    }, selectionDelay);

    const selectionTimeout = setTimeout(() => {
      setSelectionDelay(0);
      setSelectionTime(0);
    }, selectionTime);

    return () => {
      clearInterval(selectionInterval);
      clearTimeout(selectionTimeout);
    };
  }, [selectionTime, selectionDelay, choiceList.length]);

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectionTime !== 0) return;
    const inputText = event.currentTarget.value.trim();
    const inputChoiceList = inputText
      .split(",")
      .filter((choice) => choice.trim() !== "")
      .map((choice) => {
        return { isHighlighted: false, text: choice } as tag;
      });
    setChoiceList((prev) => inputChoiceList);
  };

  const enterButtonDownHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key !== "Enter") return;

    const time = Math.floor(Math.random() * 5 + 1) * 1000;
    setSelectionTime(time);
    setSelectionDelay(SELECTION_DELAY);
  };

  return (
    <div className={classes.container}>
      <h3>
        Enter all of the choices divided by a coma (',').
        <br />
        Press "Enter" when you ready!
      </h3>
      <textarea
        ref={textAreaRef}
        placeholder="Enter choices here..."
        className={classes.textarea}
        onChange={(event) => textChangeHandler(event)}
        onKeyDown={(event) => enterButtonDownHandler(event)}
      ></textarea>
      <div className="tags">
        {choiceList.map((choice, index) => (
          <Choice
            key={index}
            className={`${classes.tag} ${
              choice.isHighlighted ? classes.highlight : ""
            }`}
            text={choice.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ChoicePicker;
