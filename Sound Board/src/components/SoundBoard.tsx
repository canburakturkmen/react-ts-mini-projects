import classes from "./SoundBoard.module.css";
import applause from "../assets/sounds/applause.mp3";
import boo from "../assets/sounds/boo.mp3";
import gasp from "../assets/sounds/gasp.mp3";
import tada from "../assets/sounds/tada.mp3";
import victory from "../assets/sounds/victory.mp3";
import wrong from "../assets/sounds/wrong.mp3";

const AUDIO_LIST = [
  new Audio(applause),
  new Audio(boo),
  new Audio(gasp),
  new Audio(tada),
  new Audio(victory),
  new Audio(wrong),
];

const playAudio = (index: number) => {
  AUDIO_LIST.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  AUDIO_LIST[index].play();
};

const SoundBoard = () => {
  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={playAudio.bind(null, 0)}>
        applause
      </button>
      <button className={classes.btn} onClick={playAudio.bind(null, 1)}>
        boo
      </button>
      <button className={classes.btn} onClick={playAudio.bind(null, 2)}>
        gasp
      </button>
      <button className={classes.btn} onClick={playAudio.bind(null, 3)}>
        tada
      </button>
      <button className={classes.btn} onClick={playAudio.bind(null, 4)}>
        victory
      </button>
      <button className={classes.btn} onClick={playAudio.bind(null, 5)}>
        wrong
      </button>
    </div>
  );
};

export default SoundBoard;
