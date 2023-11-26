import css from "./OneBall.module.css";

const OneBall = ({ color }) => {
  return (
    <li className={css.ballItem}>
      <div className={css.ball} style={{ backgroundColor: color }}></div>
    </li>
  );
};

export default OneBall;
