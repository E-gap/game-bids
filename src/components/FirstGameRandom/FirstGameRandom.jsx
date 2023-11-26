import css from "./FirstGameRandom.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import BallsList from "../BallsList/BallsList";
import Notiflix from "notiflix";

const FirstGame = () => {
  const [chosenColor, setChosenColor] = useState(null);
  const balls = ["green", "yellow", "red", "blue", "pink"];
  const durations = [6500, 7000, 7500, 8000, 8500];
  const [shuffledDurations, setShuffledDurations] = useState(() => {
    return durations.sort(() => Math.random() - 0.5);
  });
  const [isAnimation, setIsAnimation] = useState(false);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const startGame = () => {
    setIsAnimation(true);
    const indexInShuffled = shuffledDurations.indexOf(6500);
    const colorInShuffled = balls[indexInShuffled];

    setTimeout(() => {
      setIsAnimation(false);

      if (colorInShuffled === chosenColor) {
        Notiflix.Notify.success("You WON");
      }
    }, 6500);
  };
  const ckickOnBall = (e) => {
    setChosenColor(e.currentTarget.getAttribute("color"));
    setShuffledDurations(shuffle(durations));
  };

  return (
    <div className={css.firstGame}>
      <h1>Game random results</h1>
      <Button text="start" handleButton={startGame} view="start_game" />
      <BallsList
        balls={balls}
        shuffledDurations={shuffledDurations}
        clickOnBall={ckickOnBall}
        isAnimation={isAnimation}
      />
    </div>
  );
};

export default FirstGame;
