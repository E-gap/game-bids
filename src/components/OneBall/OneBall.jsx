import css from "./OneBall.module.css";

const OneBall = ({ color, handleClick, duration, isAnimation }) => {
  const style = css[color];
  const animation = isAnimation ? css.animation : null;
  return (
    <li className={css.ballItem}>
      <div
        className={`${animation} ${css.ball} ${style}`}
        style={{ backgroundColor: color, animationDuration: `${duration}ms` }}
        onClick={handleClick}
        color={color}
      >
        {duration}
      </div>
    </li>
  );
};

export default OneBall;
