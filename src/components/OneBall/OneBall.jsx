import css from "./OneBall.module.css";

const OneBall = ({ color, handleClick, duration }) => {
  const style = css[color];
  return (
    <li className={css.ballItem}>
      <div
        className={`${css.ball} ${style}`}
        style={{ backgroundColor: color, animationDuration: duration }}
        onClick={handleClick}
        color={color}
      ></div>
    </li>
  );
};

export default OneBall;
