import css from "./FirstGame.module.css";
import Button from "../Button/Button";
import OneBall from "../OneBall/OneBall";
import { useState } from "react";

const FirstGame = () => {
  const [chosenColor, setChosenColor] = useState(null);
  const balls = ["green", "yellow", "red", "blue", "pink"];
  const startGame = () => {
    console.log(chosenColor);
  };
  const ckickOnBall = (e) => {
    setChosenColor(e.currentTarget.getAttribute("color"));
  };

  return (
    <div className={css.firstGame}>
      <Button text="start" handleButton={startGame} view="start_game" />
      <ul className={css.ballList}>
        {balls.map((item, index) => (
          <OneBall key={index} color={item} handleClick={ckickOnBall} />
        ))}
      </ul>
    </div>
  );
};

export default FirstGame;
