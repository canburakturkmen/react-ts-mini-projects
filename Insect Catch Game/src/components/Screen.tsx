import { useEffect, useState } from "react";
import Insect from "./Insect";

type insect = {
  imgUrl: string;
  position: { x: number; y: number };
  degree: string;
  onClickHandler?: () => void;
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
};

const getRandomDeg = () => {
  return `${Math.random() * 360}deg`;
};

const createInsect = () => {
  let pos = getRandomLocation();
  let deg = getRandomDeg();
  console.log(pos);
  return { imgUrl: "", position: pos, degree: deg };
};

const Screen = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [chosenInsect, setChosenInsect] = useState("");
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [insects, setInsects] = useState<insect[]>([]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const minute = m < 10 ? `0${m}` : m;
  const second = s < 10 ? `0${s}` : s;

  useEffect(() => {
    if (activeScreen !== 2) return;

    const gameTimeInt = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(gameTimeInt);
    };
  }, [activeScreen]);

  const insectClickHandler = (idx: number) => {
    setScore((prev) => prev + 1);
    setInsects((prev) => {
      prev.splice(idx, 1);
      return [...prev, createInsect(), createInsect()];
    });
  };

  return (
    <>
      {activeScreen === 0 && (
        <div className="screen">
          <h1>Catch The Insect</h1>
          <button
            className="btn"
            onClick={() => {
              setActiveScreen(1);
            }}
          >
            Play Game
          </button>
        </div>
      )}

      {activeScreen === 1 && (
        <div className="screen">
          <h1>What is your "favorite" insect?</h1>
          <ul className="insects-list">
            <li>
              <button
                className="choose-insect-btn"
                onClick={() => {
                  setChosenInsect(
                    "http://pngimg.com/uploads/fly/fly_PNG3946.png"
                  );
                  setInsects((prev) => [...prev, createInsect()]);
                  setActiveScreen(2);
                }}
              >
                <p>Fly</p>
                <img
                  src="http://pngimg.com/uploads/fly/fly_PNG3946.png"
                  alt="fly"
                />
              </button>
            </li>
            <li>
              <button
                className="choose-insect-btn"
                onClick={() => {
                  setChosenInsect(
                    "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
                  );
                  setInsects((prev) => [...prev, createInsect()]);
                  setActiveScreen(2);
                }}
              >
                <p>Mosquito</p>
                <img
                  src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
                  alt="mosquito"
                />
              </button>
            </li>
            <li>
              <button
                className="choose-insect-btn"
                onClick={() => {
                  setChosenInsect(
                    "http://pngimg.com/uploads/spider/spider_PNG12.png"
                  );
                  setInsects((prev) => [...prev, createInsect()]);
                  setActiveScreen(2);
                }}
              >
                <p>Spider</p>
                <img
                  src="http://pngimg.com/uploads/spider/spider_PNG12.png"
                  alt="spider"
                />
              </button>
            </li>
            <li>
              <button
                className="choose-insect-btn"
                onClick={() => {
                  setChosenInsect(
                    "http://pngimg.com/uploads/roach/roach_PNG12163.png"
                  );
                  setInsects((prev) => [...prev, createInsect()]);
                  setActiveScreen(2);
                }}
              >
                <p>Roach</p>
                <img
                  src="http://pngimg.com/uploads/roach/roach_PNG12163.png"
                  alt="roach"
                />
              </button>
            </li>
          </ul>
        </div>
      )}

      {activeScreen === 2 && (
        <div className="screen game-container">
          <h3 id="time" className="time">
            {`Time: ${minute}:${second}`}
          </h3>
          <h3 id="score" className="score">
            {`Score: ${score}`}
          </h3>
          {score >= 20 && (
            <h5 id="message" style={{ userSelect: "none" }} className="message">
              Are you annoyed yet? <br />
              You are playing an impossible game!!
            </h5>
          )}
          {insects.map((insect, idx) => (
            <Insect
              key={idx}
              position={insect.position}
              imgUrl={chosenInsect}
              degree={insect.degree}
              onClickHandler={insectClickHandler.bind(null, idx)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Screen;
