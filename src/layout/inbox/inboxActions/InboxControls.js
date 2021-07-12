import styles from "./InboxControls.module.css";

const InboxControls = () => (
  <div className={styles.container}>
    <div className={styles.icon}>
      <i className="far fa-calendar"></i>
    </div>
    <div className={styles.icon}>
      <i className="fas fa-cog"></i>
    </div>
    <div className={styles.icon}>
      <i className="far fa-question-circle"></i>
    </div>
    <div className={styles.icon}>
      <i className="fas fa-bullhorn"></i>
    </div>
    <div className={styles.icon}>
      <i className="far fa-user"></i>
    </div>
  </div>
);

export default InboxControls;
