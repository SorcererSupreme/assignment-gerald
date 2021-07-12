import { inboxListItems } from "../../../db";
import styles from "./InboxMailControls.module.css";

const InboxMailControls = ({ openedMailId }) => (
  <div className={styles.container}>
    <strong>{inboxListItems[openedMailId]["name"]}</strong>
    <div className={styles.controls}>
      <div className={styles.icon}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className={styles.icon}>
        <i className="far fa-trash-alt"></i>
      </div>
      <div className={styles.icon}>
        <i className="far fa-folder"></i>
      </div>
      <div className={styles.icon}>
        <i className="fas fa-ban"></i>
      </div>
      <div className={styles.icon}>
        <i className="fas fa-tag"></i>
      </div>
      <div className={styles.icon}>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  </div>
);

export default InboxMailControls;
