import React, { useState } from "react";

function App() {
  const [blurVal, setBlurVal] = useState(20);

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordLength = e.target.value.length;
    if (passwordLength > 20) setBlurVal(0);
    setBlurVal(20 - passwordLength);
  };

  return (
    <>
      <div
        style={{ filter: `blur(${blurVal}px)` }}
        className="background"
      ></div>
      <div className="bg-white rounded p-10 text-center shadow-md">
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">
          Type to password input to see the change!
        </p>
        <div className="my-4 text-left">
          <label htmlFor="email" className="text-gray-900">
            Email
          </label>
          <input
            type="text"
            className="border block w-full p-2 mt-2 rounded"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="my-4 text-left">
          <label htmlFor="password" className="text-gray-900">
            Password:
          </label>
          <input
            type="password"
            className="border block w-full p-2 mt-2 rounded"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => {passwordChangeHandler(e)}}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
