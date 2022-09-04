import React, { useState } from "react";

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function App() {
  const [labelVals, setLabelVals] = useState({ value: 50, left: 110 });

  const rangeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    const range_width = getComputedStyle(e.target).getPropertyValue("width");

    const num_width = +range_width.substring(0, range_width.length - 2);
    //Should be get with use ref on label.
    const num_label_width = 80;

    const max = +e.target.max;
    const min = +e.target.min;

    const left =
      newValue * (num_width / max) -
      num_label_width / 2 +
      scale(newValue, min, max, 10, -10);

    setLabelVals((prev) => ({ value: newValue, left: left }));
  };

  return (
    <>
      <h2>Custom Range Slider</h2>
      <div className="range-container">
        <input
          type="range"
          id="range"
          min={0}
          max={100}
          onChange={(e) => rangeChangeHandler(e)}
        />
        <label style={{ left: `${labelVals.left}px` }} htmlFor="range">
          {labelVals.value}
        </label>
      </div>
    </>
  );
}

export default App;
