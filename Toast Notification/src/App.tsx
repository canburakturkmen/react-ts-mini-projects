import React, { useState } from "react";
import Notification from "./components/Notification";
import uuid from "react-uuid";

const TYPES = ["INFO", "SUCCESS", "ERROR"];

const MESSAGES = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

type notification = {
  type: string;
  message: string;
  removeNotification: () => void;
};

//Todo: weird behaviour with css animation. Exp: push with 1 second interval
function App() {
  const [notifications, setNotifications] = useState<notification[]>([]);
  const pushRandomNotification = () => {
    const type = TYPES[Math.floor(Math.random() * TYPES.length)];
    const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    setNotifications((prev) => {
      let tempPrev = [...prev];
      tempPrev.push({ type, message, removeNotification });
      return tempPrev;
    });
  };

  const removeNotification = () => {
    setNotifications((prev) => {
      let tempList = [...prev];
      tempList.shift();
      return tempList;
    });
  };

  return (
    <>
      <div id="toasts">
        {notifications.map((el, index) => (
          <Notification key={uuid()} {...el} />
        ))}
      </div>
      <button className="btn" onClick={pushRandomNotification}>
        Show Notification
      </button>
    </>
  );
}

export default App;
