import React from "react";

const url = "https://source.unsplash.com/random/";
const images = Array.from(Array(50).keys());

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 300);
};

const getRandomSize = () => {
  return `${getRandomNumber()}x${getRandomNumber()}`;
};

function App() {
  return (
    <>
      <h1>Random Image Feed</h1>
      <div className="container">
        {images.map((idx) => (
          <img src={`${url}${getRandomSize()}`} alt="random" />
        ))}
      </div>
    </>
  );
}

export default App;
