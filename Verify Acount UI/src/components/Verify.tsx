import React, { useEffect, useRef } from "react";
import classes from "./Verify.module.css";

const NUM_OF_INPUTS = Array.from(Array(6).keys());

const Verify = () => {
  const inputRef = useRef<any[]>([]);
  useEffect(() => {
    if (inputRef.current === null) return;
    inputRef.current[0]?.focus();
  });

  const inputKeyDownHandler = (e: React.KeyboardEvent, idx: number) => {
    e.preventDefault();
    if (Number.parseInt(e.key) >= 0 && Number.parseInt(e.key) <= 9) {
      if (inputRef.current[idx].value.length < 2)
        inputRef.current[idx].value = Number.parseInt(e.key);
      if (idx + 1 < inputRef.current.length) inputRef.current[idx + 1].focus();
    } else if (e.key === "Backspace") {
      inputRef.current[idx].value = "";
      if (idx - 1 < 0) return;
      inputRef.current[idx - 1].focus();
    }
  };

  return (
    <div className={classes.container}>
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to cool_app@email.com <br />
        Enter the code below to confirm your email address.
      </p>
      <div className={classes["code-container"]}>
        {NUM_OF_INPUTS.map((val) => (
          <input
            key={val}
            ref={(el) => inputRef.current?.push(el)}
            type="number"
            className={classes.code}
            placeholder="0"
            min={0}
            max={9}
            required
            onKeyDown={(e) => {
              inputKeyDownHandler(e, val);
            }}
          />
        ))}
      </div>
      <small className={classes.info}>
        This is design only.We didn't actually send you an email as we don't
        have your email, right?
      </small>
    </div>
  );
};

export default Verify;
