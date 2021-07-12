import styles from "./InboxListItem.module.css";

const InboxListItem = ({ item, isMailOpened = false }) => (
  <div className={isMailOpened ? styles.containerActive : styles.container}>
    <img src={item.avatar} className={styles.avatar} />
    <div className={styles.itemDetail}>
      <div className={styles.itemDetailTopRow}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.time}>{item.time}</span>
      </div>
      <span className={styles.subject}>{item.subject}</span>
      <span className={styles.snippet}>{item.snippet}</span>
    </div>
  </div>
);

export default InboxListItem;
