import styles from "./Button.module.css";

const Button = ({ children, handleClick = null, style = {} }) => (
  <button onClick={handleClick} className={styles.button} style={style}>
    {children}
  </button>
);

export default Button;
