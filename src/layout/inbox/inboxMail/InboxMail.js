import { inboxListItems } from "../../../db";
import styles from "./InboxMail.module.css";
import InboxMailControls from "./InboxMailControls";

const InboxMail = ({ openedMailId }) => (
  <div className={styles.container}>
    <InboxMailControls openedMailId={openedMailId} />
    <div>
      <div className={styles.header}>
        <span>View in Browser</span>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={inboxListItems[openedMailId]["img"]}
          className={styles.image}
        />
      </div>
      <div className={styles.subject}>
        <span>{inboxListItems[openedMailId]["subject"]}</span>
      </div>
      <div className={styles.content}>
        <p>{inboxListItems[openedMailId]["snippet"]}</p>
      </div>
    </div>
  </div>
);

export default InboxMail;
