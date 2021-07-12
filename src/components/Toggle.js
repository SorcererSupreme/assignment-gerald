import styles from "./Toggle.module.css";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={toggleTheme} />
      <div className={`${styles.slider} ${styles.round}`}>
        <span>🌙</span>
        <span>☀️</span>
      </div>
    </label>
  );
};

export default Toggle;
