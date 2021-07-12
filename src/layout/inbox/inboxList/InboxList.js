import { inboxListItems } from "../../../db";
import styles from "./InboxList.module.css";
import InboxListControls from "./InboxListControls";
import InboxListItem from "./InboxListItem";

const InboxList = ({ openedMailId, openMail }) => (
  <div className={styles.container}>
    <InboxListControls />
    {inboxListItems.map((item) => (
      <div key={item.id} onClick={() => openMail(item.id)}>
        {item["id"] == openedMailId ? (
          <InboxListItem item={item} isMailOpened={true} />
        ) : (
          <InboxListItem item={item} isMailOpened={false} />
        )}
      </div>
    ))}
  </div>
);

export default InboxList;
