import css from "./Button.module.css";


const Button = ({ text, handleButton, view }) => {
  const style = css[view];

  return (
    <button type="button" className={style} onClick={handleButton}>
      {text}      
    </button>
  );
};

export default Button;
