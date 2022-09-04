import { useState, useEffect } from "react";

const Notification = (props: {
  message: string;
  type: string;
  removeNotification: () => void;
}) => {
  const classType =
    props.type === "INFO"
      ? "info"
      : props.type === "SUCCESS"
      ? "success"
      : "error";
  const removeFunc = props.removeNotification;

  useEffect(() => {
    const removeTimeout = setTimeout(() => {
      removeFunc();
    }, 3000);
    return () => {
      clearTimeout(removeTimeout);
    };
  }, [removeFunc]);

  return <div className={"toast " + classType}>{props.message}</div>;
};
export default Notification;
