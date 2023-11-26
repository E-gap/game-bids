import css from "./BallsList.module.css";
import OneBall from "../OneBall/OneBall";

const BallsList = ({ balls, shuffledDurations, numberGame, clickOnBall }) => {
  console.log(shuffledDurations, numberGame);
  return (
    <ul className={css.ballList} numberGame={numberGame}>
      {balls.map((item, index) => (
        <OneBall
          key={index}
          color={item}
          handleClick={clickOnBall}
          duration={shuffledDurations[index]}
        />
      ))}
    </ul>
  );
};

export default BallsList;
