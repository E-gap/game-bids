import css from "./BallsList.module.css";
import OneBall from "../OneBall/OneBall";

const BallsList = ({
  balls,
  shuffledDurations,
  numberGame,
  clickOnBall,
  isAnimation,
}) => {
  return (
    <ul className={css.ballList}>
      {balls.map((item, index) => (
        <OneBall
          key={index}
          color={item}
          handleClick={clickOnBall}
          duration={shuffledDurations[index]}
          numberGame={numberGame}
          isAnimation={isAnimation}
        />
      ))}
    </ul>
  );
};

export default BallsList;
