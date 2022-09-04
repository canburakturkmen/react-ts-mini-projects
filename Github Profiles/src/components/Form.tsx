import React, { createRef } from "react";
import useHttp from "../hooks/use-http";
import classes from "./Form.module.css";

const url = "https://api.github.com/users/";

type props = {
  setUserProfileHandler: (userProfile: any) => void;
};

const Form = (props: props) => {
  const inputRef = createRef<HTMLInputElement>();
  const { isLoading, error, sendRequest } = useHttp();

  const setUserProfile = (userProfile: any) => {
    props.setUserProfileHandler(userProfile);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputRefCurrent = inputRef.current;
    if (!inputRef.current) return;
    sendRequest(url + inputRefCurrent?.value, {}, setUserProfile);
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className={classes["user-form"]}
    >
      <input ref={inputRef} type="text" placeholder="Search a Github User" />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Form;
