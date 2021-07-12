import Button from "../../../components/Button";
import styles from "./InboxListControls.module.css";

const InboxListControls = () => (
  <div className={styles.container}>
    <div className={styles.priority}>
      <strong>Prioritaire</strong>
      <div className={styles.icon}>
        <i className="fas fa-angle-down"></i>
      </div>
    </div>
    <Button>
      <i className="fas fa-plus"></i>
    </Button>
  </div>
);

export default InboxListControls;
