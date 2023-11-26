import css from "./FirstGame.module.css";
import Button from "../Button/Button";
import OneBall from "../OneBall/OneBall";

const FirstGame = () => {
  const balls = ["green", "yellow", "red", "blue", "pink"];
  const startGame = () => {
    console.log("start new game");
  };
  return (
    <div className={css.firstGame}>
      <Button text="start" handleButton={startGame} view="start_game" />
      <ul className={css.ballList}>
        {balls.map((item, index) => (
          <OneBall key={index} color={item} />
        ))}
      </ul>
    </div>
  );
};

export default FirstGame;
