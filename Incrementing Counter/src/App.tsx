import React from "react";
import IncrementCounter from "./components/IncrementCounter";

const INCREMENT_LIST = [
  { iconClass: "fab fa-twitter", counter: 12000, text: "Twitter Followers" },
  { iconClass: "fab fa-youtube", counter: 5000, text: "Youtube Subscribers" },
  { iconClass: "fab fa-facebook", counter: 7500, text: "Facebook Fans" },
];

function App() {
  return (
    <>
      {INCREMENT_LIST.map((el, index) => (
        <IncrementCounter
          key={index}
          iconClass={el.iconClass}
          counter={el.counter}
          text={el.text}
        />
      ))}
    </>
  );
}

export default App;
