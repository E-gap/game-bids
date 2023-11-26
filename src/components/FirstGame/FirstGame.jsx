import css from "./FirstGame.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import BallsList from "../BallsList/BallsList";

const FirstGame = () => {
  const [chosenColor, setChosenColor] = useState(null);
  const balls = ["green", "yellow", "red", "blue", "pink"];
  const durations = ["6500ms", "7000ms", "7500ms", "8000ms", "8500ms"];
  const [shuffledDurations, setShuffledDurations] = useState(durations);
  const [numberGame, setNumberGame] = useState(0);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const startGame = () => {
    setNumberGame(numberGame + 1);
    setShuffledDurations(shuffle(durations));

    setTimeout(() => {
      whoIsFirst();
    }, 6500);
  };
  const ckickOnBall = (e) => {
    setChosenColor(e.currentTarget.getAttribute("color"));
  };

  const whoIsFirst = () => {
    console.log("first is");
  };

  return (
    <div className={css.firstGame}>
      <Button text="start" handleButton={startGame} view="start_game" />
      <BallsList
        balls={balls}
        shuffledDurations={shuffledDurations}
        numberGame={numberGame}
        clickOnBall={ckickOnBall}
      />
    </div>
  );
};

export default FirstGame;
