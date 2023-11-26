import css from "./FirstGame.module.css";
import Button from "../Button/Button";
import OneBall from "../OneBall/OneBall";
import { useState } from "react";

const FirstGame = () => {
  const [chosenColor, setChosenColor] = useState(null);
  const balls = ["green", "yellow", "red", "blue", "pink"];
  const durations = ["6500ms", "7000ms", "7500ms", "8000ms", "8500ms"];
  const startGame = () => {
    console.log(chosenColor);
  };
  const ckickOnBall = (e) => {
    setChosenColor(e.currentTarget.getAttribute("color"));
  };
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className={css.firstGame}>
      <Button text="start" handleButton={startGame} view="start_game" />
      <ul className={css.ballList}>
        {balls.map((item, index) => (
          <OneBall
            key={index}
            color={item}
            handleClick={ckickOnBall}
            duration={shuffle(durations)[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default FirstGame;
