import { useEffect, useState } from "react";
import classes from "./Joke.module.css";

const jokeUrl = "https://icanhazdadjoke.com/";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const Joke = () => {
  const [joke, setJoke] = useState("Loading...");

  useEffect(() => {
    fetch(jokeUrl, options)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setJoke(result.joke);
      })
      .catch((reason) => {
        setJoke("An error occured while receiving a joke!");
      });
  }, []);

  return (
    <div className={classes.container}>
      <h3>Try Not To Laugh</h3>
      <div className={classes.joke}>{joke}</div>
      <button
        className={classes.btn}
        onClick={() => {
          fetch(jokeUrl, options)
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              console.log(result);
              setJoke(result.joke);
            })
            .catch((reason) => {
              setJoke("An error occured while receiving a joke!");
            });
        }}
      >
        Get Another Joke
      </button>
    </div>
  );
};

export default Joke;
