import React, { useState } from "react";
import BigCup from "./components/BigCup";
import SmallCups from "./components/SmallCups";

function App() {
  const [cupInfo, setCupInfo] = useState({ remained: 2, percentage: 0 });

  const smallCupClickHandler = () => {
    setCupInfo((prev) => ({
      remained: prev.remained - 0.25,
      percentage: prev.percentage + 12.5,
    }));
  };

  return (
    <>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>
      <BigCup remained={cupInfo.remained} percentage={cupInfo.percentage} />
      <p className="text">
        Select how many glasses of water that you have drank
      </p>
      <SmallCups cupClickHandler = {smallCupClickHandler}/>
    </>
  );
}

export default App;
