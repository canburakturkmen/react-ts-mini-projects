import React, { useState } from "react";
import classes from "./PasswordGenerator.module.css";

type passwordOptions = {
  password: string;
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const initPasswordOptions = () => ({
  password: "",
  length: 8,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
});

const getRandomLower = () => {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
};

const getRandomUpper = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

const getRandomNumber = () => {
  return String.fromCharCode(48 + Math.floor(Math.random() * 10));
};

const getRandomSymbol = () => {
  const symbols = "!@#$%*(){}[]=<>/,-._";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFuncArr = [
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
];

const PasswordGenerator = () => {
  const [options, setOptions] = useState<passwordOptions>(
    initPasswordOptions()
  );

  const generatePasswordHandler = () => {
    let generatedPassword = "";
    let typesArr: number[] = [];
    options.lowercase && typesArr.push(0);
    options.uppercase && typesArr.push(1);
    options.numbers && typesArr.push(2);
    options.symbols && typesArr.push(3);

    for (let index = 0; index < options.length; index++) {
      const randFunc =
        randomFuncArr[typesArr[Math.floor(Math.random() * typesArr.length)]];
      generatedPassword += randFunc();
    }

    setOptions((prev) => ({ ...prev, password: generatedPassword }));
  };

  const clipboardClickHandler = () => {
    navigator.clipboard.writeText(options.password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className={classes.container}>
      <h2>Password Generator</h2>
      <div className={classes["result-container"]}>
        <span className={classes.result}>{options.password}</span>
        <button
          className={classes.btn}
          onClick={() => {
            clipboardClickHandler();
          }}
        >
          <i className="far fa-clipboard"></i>
        </button>
      </div>
      <div className={classes.settings}>
        <div className={classes.setting}>
          <label>Password Length</label>
          <input
            type="number"
            min={8}
            max={20}
            step={1}
            value={options.length}
            onChange={(e) => {
              setOptions((prev) => ({
                ...prev,
                length: +e.target.value,
              }));
            }}
          />
        </div>
        <div className={classes.setting}>
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={() => {
              setOptions((prev) => ({ ...prev, uppercase: !prev.uppercase }));
            }}
          />
        </div>
        <div className={classes.setting}>
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            checked={options.lowercase}
            onChange={() => {
              setOptions((prev) => ({ ...prev, lowercase: !prev.lowercase }));
            }}
          />
        </div>
        <div className={classes.setting}>
          <label>Include numbers</label>
          <input
            type="checkbox"
            checked={options.numbers}
            onChange={() => {
              setOptions((prev) => ({ ...prev, numbers: !prev.numbers }));
            }}
          />
        </div>
        <div className={classes.setting}>
          <label>Include symbols</label>
          <input
            type="checkbox"
            checked={options.symbols}
            onChange={() => {
              setOptions((prev) => ({ ...prev, symbols: !prev.symbols }));
            }}
          />
        </div>
      </div>
      <button
        className={`${classes.btn} ${classes["btn-large"]}`}
        onClick={generatePasswordHandler}
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
