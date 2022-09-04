import React, { useEffect, useState } from "react";

function App() {
  const [textInfo, setTextInfo] = useState({
    length: 0,
    text: "We Love Programming!",
    speed: 1,
  });

  useEffect(() => {
    const autoTextInterval = setInterval(() => {
      setTextInfo((prev) => {
        let newLength = prev.length + 1;
        if (newLength > prev.text.length - 1) newLength = 1;
        return { ...prev, length: newLength };
      });
    }, 300 / textInfo.speed);
    return () => {
      clearInterval(autoTextInterval);
    };
  }, [textInfo]);

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setTextInfo((prev) => ({ ...prev, speed: Number.parseInt(val) }));
  };

  return (
    <>
      <h1>{textInfo.text.substring(0, textInfo.length)}</h1>

      <div className="speed-container">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          value={textInfo.speed}
          min={1}
          max={10}
          step={1}
          onChange={(e) => {
            handleSpeedChange(e);
          }}
        />
      </div>
    </>
  );
}

export default App;
