import { useState } from "react";
import Question from "./Question";
import classes from "./Quiz.module.css";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const submitButtonClickHandler = () => {
    if (selectedOption === null) return;
    let newQuestion = activeQuestion + 1;
    if (selectedOption === quizData[activeQuestion].correct)
      setScore((prev) => prev + 1);

    setSelectedOption(null);
    setActiveQuestion(newQuestion);
  };

  const optionClickHandler = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={classes["quiz-container"]}>
      <div className={classes["quiz-header"]}>
        {activeQuestion < quizData.length && (
          <Question
            selectedOption={selectedOption}
            selectedOptionHandler={optionClickHandler}
            {...quizData[activeQuestion]}
          />
        )}
        {activeQuestion >= quizData.length && (
          <h2>
            You answered correctly at {`${score}/${quizData.length}`} questions
          </h2>
        )}
      </div>
      {activeQuestion < quizData.length && (
        <button
          onClick={() => {
            submitButtonClickHandler();
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Quiz;
